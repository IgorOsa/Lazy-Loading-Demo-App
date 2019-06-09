import React from 'react';
import data from "./data";
import {Container, Row, Media, Image, Spinner} from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

const Loading = () => (
  <ul className="list-unstyled">
    <Media as="li">
      <Media.Body>
        <h4>Loading...</h4>
      </Media.Body>
    </Media>
  </ul>
)

const Post = ({id, title, body, img}) => (
  <ul className="list-unstyled">
    <Media as="li">
      <LazyLoad 
        once={true} 
        placeholder={<img src={`https://picsum.photos/id/${id}/5/5`}  alt="..." />}
      >
        <Image
          src={`https://picsum.photos/id/${id}/200/200`} 
          alt=''
          width={200} 
          height={200}
          className="mr-3"
          thumbnail
        />
      </LazyLoad>
      <Media.Body>
        <h3>{title}</h3>
        <p>{body}</p>
      </Media.Body>
    </Media>
  </ul>
);

const App = () => (
  <div className="App">
    <Container>
      <Row>
        <h2>LazyLoad Demo App</h2>
      </Row>
      <Row>
        <div className="post-container">
          {data.map(post => (
            <LazyLoad 
              key={post.id} 
              height={100}
              offset={[-100, 100]}
              placeholder={<Spinner />}
            >
              <Post key={post.id} {...post} />
            </LazyLoad>
          ))}
        </div>
      </Row>
    </Container>
  </div>
);

export default App;
