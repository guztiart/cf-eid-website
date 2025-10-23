import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const Blog = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="blog-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Blog/News</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Blog/News</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section id="blog-posts" className="blog-posts section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Blog/News</h2>
          <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <article>
                <div className="post-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-1.jpg`} alt="" className="img-fluid" />
                </div>
                <p className="post-date">December 12</p>
                <div className="post-content">
                  <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus libero. Curabitur mattis, justo sed vehicula consectetur, nisl velit finibus nibh, nec ullamcorper lorem nisl quis nisl.</p>
                  <div className="meta">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <article>
                <div className="post-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-2.jpg`} alt="" className="img-fluid" />
                </div>
                <p className="post-date">July 17</p>
                <div className="post-content">
                  <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus libero. Curabitur mattis, justo sed vehicula consectetur, nisl velit finibus nibh, nec ullamcorper lorem nisl quis nisl.</p>
                  <div className="meta">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <article>
                <div className="post-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-3.jpg`} alt="" className="img-fluid" />
                </div>
                <p className="post-date">September 05</p>
                <div className="post-content">
                  <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus libero. Curabitur mattis, justo sed vehicula consectetur, nisl velit finibus nibh, nec ullamcorper lorem nisl quis nisl.</p>
                  <div className="meta">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <article>
                <div className="post-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-4.jpg`} alt="" className="img-fluid" />
                </div>
                <p className="post-date">November 22</p>
                <div className="post-content">
                  <h3 className="post-title">Et repellendus molestiae qui est sed omnis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus libero. Curabitur mattis, justo sed vehicula consectetur, nisl velit finibus nibh, nec ullamcorper lorem nisl quis nisl.</p>
                  <div className="meta">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Mario Douglas</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <article>
                <div className="post-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-5.jpg`} alt="" className="img-fluid" />
                </div>
                <p className="post-date">October 15</p>
                <div className="post-content">
                  <h3 className="post-title">Quia assumenda est et veritati tirana ploder</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus libero. Curabitur mattis, justo sed vehicula consectetur, nisl velit finibus nibh, nec ullamcorper lorem nisl quis nisl.</p>
                  <div className="meta">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Lisa Hunter</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <article>
                <div className="post-img">
                  <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-6.jpg`} alt="" className="img-fluid" />
                </div>
                <p className="post-date">August 30</p>
                <div className="post-content">
                  <h3 className="post-title">Eum ad dolor et. Autem aut fugiat debitis</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et tellus libero. Curabitur mattis, justo sed vehicula consectetur, nisl velit finibus nibh, nec ullamcorper lorem nisl quis nisl.</p>
                  <div className="meta">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                    </div>
                    <span className="px-3 text-black-50">/</span>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                    </div>
                  </div>
                  <hr />
                  <Link to="/blog-details" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Pagination */}
      <div className="blog-pagination">
        <ul>
          <li><a href="#"><i className="bi bi-chevron-left"></i></a></li>
          <li><a href="#" className="active">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#"><i className="bi bi-chevron-right"></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default Blog;