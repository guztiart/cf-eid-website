import React from 'react';
import { Link } from 'react-router-dom';
import { useAOS } from '../hooks/useExternalLibs';

const BlogDetails = () => {
  // Initialize external libraries using custom hooks
  useAOS();

  return (
    <div className="blog-details-page">
      {/* Page Title */}
      <div className="page-title dark-background" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/page-title-bg.jpg)` }}>
        <div className="container position-relative">
          <h1>Blog Details</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li className="current">Blog Details</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Blog Details Section */}
      <section id="blog-details" className="blog-details section">
        <div className="container">
          <article className="article">
            <div className="post-img">
              <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-1.jpg`} alt="" className="img-fluid" />
            </div>
            <h2 className="title">Eum ad dolor et. Autem aut fugiat debitis</h2>
            <div className="meta-top">
              <ul>
                <li className="d-flex align-items-center"><i className="bi bi-person"></i> <span>Julia Parker</span></li>
                <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <span>December 12, 2023</span></li>
                <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <span>12 Comments</span></li>
              </ul>
            </div>
            <div className="content">
              <p>
                Similique neque nam voluptatem et consequuntur consequatur a ad aliquid. 
                Molestiae aut ut libero et eum cupiditate. Voluptatem et aliquam quaerat voluptates 
                quae est et ducimus.
              </p>
              <p>
                Et quod iure quibusdam ut facilis blanditiis at sint voluptates. 
                Qui consequatur nihil aut eveniet et officia deleniti aspernatur quod. 
                Incidunt iusto provident aut nihil. Quo eos autem. Consectetur sint iure officiis. 
                Et quod iure quibusdam ut facilis blanditiis at sint voluptates.
              </p>
              <blockquote>
                <p>
                  Et vero doloremque tempore voluptatem ratione vel aut. Rerum assumenda mollitia 
                  est deserunt consequatur aliquid eveniet.
                </p>
              </blockquote>
              <p>
                Qui quasi ratione voluptatem sequi iure. Consequatur pariatur totam sed quod 
                voluptas. Quod repellat sit velit ullam exercitationem. Quod repellat sit velit ullam 
                exercitationem. Et quod iure quibusdam ut facilis blanditiis at sint voluptates.
              </p>
              <h3>Et quod iure</h3>
              <p>
                Et quod iure quibusdam ut facilis blanditiis at sint voluptates. 
                Qui consequatur nihil aut eveniet et officia deleniti aspernatur quod. 
                Incidunt iusto provident aut nihil. Quo eos autem. Consectetur sint iure officiis. 
                Et quod iure quibusdam ut facilis blanditiis at sint voluptates.
              </p>
              <p>
                Qui quasi ratione voluptatem sequi iure. Consequatur pariatur totam sed quod 
                voluptas. Quod repellat sit velit ullam exercitationem. Quod repellat sit velit ullam 
                exercitationem. Et quod iure quibusdam ut facilis blanditiis at sint voluptates.
              </p>
            </div>
            <div className="meta-bottom">
              <div className="d-flex justify-content-between align-items-center">
                <div className="cats">
                  <h6>Categories:</h6>
                  <ul>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Business</a></li>
                  </ul>
                </div>
                <div className="tags">
                  <h6>Tags:</h6>
                  <ul>
                    <li><a href="#">Creative</a></li>
                    <li><a href="#">Design</a></li>
                    <li><a href="#">Development</a></li>
                  </ul>
                </div>
                <div className="share">
                  <h6>Share:</h6>
                  <div className="social-links">
                    <a href="#"><i className="bi bi-twitter-x"></i></a>
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Author Section */}
      <section id="blog-author" className="blog-author section">
        <div className="container">
          <div className="author-container">
            <div className="d-flex align-items-center">
              <img src={`${process.env.PUBLIC_URL}/assets/img/blog/blog-author.jpg`} className="flex-shrink-0" alt="" />
              <div>
                <h4>Julia Parker</h4>
                <div className="social-links">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
                <p>
                  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
                  voluptatibus maiores alias consequatur aut perferendis doloribus asperiores 
                  repellat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Comments Section */}
      <section id="blog-comments" className="blog-comments section">
        <div className="container">
          <div className="comments-count">
            <h3>3 Comments</h3>
          </div>
          <div className="comment">
            <div className="d-flex">
              <div className="comment-img"><img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-1.jpg`} alt="" /></div>
              <div>
                <h5><a href="">Georgia Reader</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                <time datetime="2020-01-01">01 Jan,2023</time>
                <p>
                  Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. 
                  Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore.
                </p>
              </div>
            </div>
          </div>
          <div className="comment">
            <div className="d-flex">
              <div className="comment-img"><img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-2.jpg`} alt="" /></div>
              <div>
                <h5><a href="">Aron Alvarado</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                <time datetime="2020-01-01">01 Jan,2023</time>
                <p>
                  Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. 
                  Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore.
                </p>
                <div className="comment comment-reply">
                  <div className="d-flex">
                    <div className="comment-img"><img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-3.jpg`} alt="" /></div>
                    <div>
                      <h5><a href="">Lynda Small</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                      <time datetime="2020-01-01">01 Jan,2023</time>
                      <p>
                        Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. 
                        Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="comment">
            <div className="d-flex">
              <div className="comment-img"><img src={`${process.env.PUBLIC_URL}/assets/img/testimonials/testimonials-4.jpg`} alt="" /></div>
              <div>
                <h5><a href="">Sianna Ramsay</a> <a href="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</a></h5>
                <time datetime="2020-01-01">01 Jan,2023</time>
                <p>
                  Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. 
                  Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment Form Section */}
      <section id="comment-form" className="comment-form section">
        <div className="container">
          <form>
            <h4>Leave a Reply</h4>
            <p>Your email address will not be published. Required fields are marked * </p>
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" placeholder="Your Name*" required />
              </div>
              <div className="col-md-6 form-group">
                <input type="email" name="email" className="form-control" placeholder="Your Email*" required />
              </div>
            </div>
            <div className="form-group">
              <input type="text" name="subject" className="form-control" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" className="form-control" rows="5" placeholder="Your Comment*" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Post Comment</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;