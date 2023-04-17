import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=items`,
    { cache: "no-store" }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();

  return (
    <main className='w-full h-screen bg-slate-500'>
      <div className='grid grid-cols-4 p-5 gap-5'>
        {blogs.items.map((blog: any) => (
          <div className=' bg-white p-5' key={blog.sys.id}>
            {blogs.includes.Asset.map((elem: any) => (
              <div>
                {blog.fields.image.sys.id == elem.sys.id ? (
                  <Image
                    src={"https:" + elem.fields.file.url}
                    alt=''
                    width={400}
                    height={400}
                    className='h-64'
                  />
                ) : (
                  <div></div>
                )}
              </div>
            ))}

            <h1 className=' text-3xl font-semibold p-2'>{blog.fields.title}</h1>
            <div className='text-md'>
              {documentToReactComponents(blog.fields.description)}
            </div>
            <p className='text-md text-2xl'>Size: {blog.fields.size}</p>
            <h2 className=' font-bold'>Rs: {blog.fields.price}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
