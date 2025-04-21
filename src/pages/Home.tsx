import { useState } from "react";

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  className: string;
}

function ImageWithPlaceholder({
  src,
  alt,
  className,
}: ImageWithPlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  console.log(import.meta.env.VITE_ENV);

  return (
    <div className={`${className} bg-gray-200 relative`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-opacity duration-300"
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

export default function Home() {
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn the fundamentals of React development",
      image: "https://picsum.photos/600/400?random=1",
    },
    {
      id: 2,
      title: "Mastering Tailwind CSS",
      excerpt: "Advanced techniques for responsive design",
      image: "https://picsum.photos/600/400?random=2",
    },
    {
      id: 3,
      title: "TypeScript Best Practices",
      excerpt: "Improve your TypeScript code quality",
      image: "https://picsum.photos/600/400?random=3",
    },
    {
      id: 4,
      title: "Web Performance Optimization",
      excerpt: "Techniques for faster loading websites",
      image: "https://picsum.photos/600/400?random=4",
    },
    {
      id: 5,
      title: "React Hooks Deep Dive",
      excerpt: "Master useState, useEffect and custom hooks",
      image: "https://picsum.photos/600/400?random=5",
    },
    {
      id: 6,
      title: "Responsive Design Patterns",
      excerpt: "Create adaptive layouts for all devices",
      image: "https://picsum.photos/600/400?random=6",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-white">Tech Insights</h1>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative h-96 bg-gradient-to-r from-teal-600 to-indigo-600">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/id/237/1920/600')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-6">
              Welcome to Tech Insights
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Your source for the latest in web development, design trends, and
              technology innovations
            </p>
            <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all text-lg">
              Explore Articles
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            Latest Posts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <ImageWithPlaceholder
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-purple-600 hover:text-purple-700 font-medium">
                    Read Article →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* Related Posts */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            You Might Also Like
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <ImageWithPlaceholder
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                  <p className="text-gray-600 text-sm">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-white font-bold mb-4">Tech Insights</h5>
              <p className="text-sm">
                Bringing you the latest in technology and web development.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Legal</h5>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2025 Tech Insights. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
