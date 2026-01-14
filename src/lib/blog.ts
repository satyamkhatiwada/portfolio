import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  content?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export function getSortedPostsData(): BlogPost[] {
  // Get file names under /content/blog
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        ...(matterResult.data as Omit<BlogPost, "id" | "content">),
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ""),
      };
    });
}

export async function getPostData(
  slug: string
): Promise<BlogPostWithContent | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html, { sanitize: false })
      .process(matterResult.content);

    let contentHtml = processedContent.toString();

    // Apply custom styling to the generated HTML
    contentHtml = applyCustomStyling(contentHtml);

    // Combine the data with the slug and content
    return {
      slug,
      content: contentHtml,
      ...(matterResult.data as Omit<BlogPost, "slug" | "content">),
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Apply custom Spotify-themed styling to the parsed HTML
function applyCustomStyling(html: string): string {
  let styledHtml = html;
  let isFirstParagraph = true;

  /* ---------------- HEADERS ---------------- */

  styledHtml = styledHtml.replace(
    /<h1>/g,
    '<h1 class="mt-14 mb-6 text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">'
  );

  styledHtml = styledHtml.replace(
    /<h2>/g,
    '<h2 class="mt-20 mb-5 text-2xl md:text-3xl font-semibold text-white tracking-tight">'
  );

  styledHtml = styledHtml.replace(
    /<h3>/g,
    '<h3 class="mt-12 mb-3 text-xl md:text-2xl font-semibold text-white/90">'
  );

  /* ---------------- PARAGRAPHS ---------------- */

  styledHtml = styledHtml.replace(/<p>/g, () => {
    if (isFirstParagraph) {
      isFirstParagraph = false;
      return '<p class="mb-8 text-xl leading-relaxed text-white/90">';
    }
    return '<p class="mb-5 text-[17px] leading-relaxed text-white/75">';
  });

  /* ---------------- EMPHASIS ---------------- */

  styledHtml = styledHtml.replace(
    /<strong>/g,
    '<strong class="font-medium text-white">'
  );

  styledHtml = styledHtml.replace(
    /<em>/g,
    '<em class="italic text-white/70">'
  );

  /* ---------------- LISTS ---------------- */

  styledHtml = styledHtml.replace(
    /<ul>/g,
    '<ul class="my-6 space-y-3 pl-6 list-disc text-[17px] text-white/75 marker:text-spotify-green/50">'
  );

  styledHtml = styledHtml.replace(
    /<ol>/g,
    '<ol class="my-6 space-y-3 pl-6 list-decimal text-[17px] text-white/75 marker:text-spotify-green/50">'
  );

  styledHtml = styledHtml.replace(
    /<li>/g,
    '<li class="leading-relaxed">'
  );

  /* ---------------- BLOCKQUOTE / PRO TIP ---------------- */

  styledHtml = styledHtml.replace(
    /<blockquote>/g,
    `
    <blockquote class="
      my-10
      pl-5
      italic
      text-[17px]
      text-white/80
      border-l-2
      border-spotify-green/60
    ">
    `
  );

  /* ---------------- LINKS ---------------- */

  styledHtml = styledHtml.replace(
    /<a href="([^"]*)">/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-spotify-green hover:text-green-300 underline underline-offset-4 transition">'
  );

  /* ---------------- HR (---) ---------------- */

  styledHtml = styledHtml.replace(
    /<hr ?\/?>/g,
    `
    <div class="my-16 flex justify-center">
      <span class="h-px w-24 bg-white/15"></span>
    </div>
    `
  );

  /* ---------------- CODE ---------------- */

  styledHtml = styledHtml.replace(
    /<pre><code>/g,
    '<pre class="my-10 rounded-lg bg-black/70 p-5 overflow-x-auto text-sm text-spotify-green"><code>'
  );

  styledHtml = styledHtml.replace(
    /<code>/g,
    '<code class="bg-black/50 px-1.5 py-0.5 rounded text-sm text-spotify-green">'
  );

  /* ---------------- CONTAINER ---------------- */

  styledHtml = `
    <div class="max-w-[680px] mx-auto px-2 md:px-0">
      ${styledHtml}
    </div>
  `;

  return styledHtml;
}



export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getSortedPostsData();
  return posts.find((post) => post.slug === slug) || null;
}
