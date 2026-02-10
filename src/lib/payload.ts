const PAYLOAD_URL = "http://134.209.36.188:3000";

export async function getPosts() {
     const response = await fetch(`${PAYLOAD_URL}/api/posts`);
     const data = await response.json();
     return data.docs; // Payload returns docs in a 'docs' array
}

export async function getPost(slug: string) {
     const response = await fetch(
          `${PAYLOAD_URL}/api/posts?where[slug][equals]=${slug}`
     );
     const data = await response.json();
     const post = data.docs[0];

     // Convert Lexical content to HTML
     if (post && post.content) {
          post.contentHTML = convertLexicalToHTML(post.content);
     }

     return post;
}

// Simple Lexical to HTML converter
function convertLexicalToHTML(lexical: any): string {
     if (!lexical?.root?.children) return "";

     return lexical.root.children
          .map((node: any) => {
               if (node.type === "paragraph") {
                    const text =
                         node.children
                              ?.map((child: any) => child.text || "")
                              .join("") || "";
                    return text ? `<p>${text}</p>` : "";
               }
               return "";
          })
          .join("");
}
