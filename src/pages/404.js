import * as React from 'react';
import Layout from '../components/layout'


const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
      </p>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
