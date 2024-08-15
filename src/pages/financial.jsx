import { Helmet } from 'react-helmet-async';

import Financial from 'src/sections_2/financial/index';

// ----------------------------------------------------------------------

export default function FinancialPage() {

  return (
    <>
      <Helmet>
        <title> Financial  </title>
      </Helmet>

      <Financial />
    </>
  );
}
