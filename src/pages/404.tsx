import React from 'react';

type Props = {};

const ErrorPage = (props: Props) => {
  return (
    <div className="mt-[30vh] flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
      <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:pr-6 sm:text-3xl sm:dark:border-slate-300/10">
        404
      </h1>
      <h2 className="mt-2 text-lg text-slate-700 dark:text-slate-400 sm:mt-0">
        This page could not be found.
      </h2>
    </div>
  );
};

export default ErrorPage;
