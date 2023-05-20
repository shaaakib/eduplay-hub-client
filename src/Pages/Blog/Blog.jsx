import React from 'react';

export default function Blog() {
  return (
    <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white mt-20">
      <details
        className="group p-6 [&_summary::-webkit-details-marker]:hidden"
        open
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">Access tokens</span> are issued to
          third-party clients by an authorization server with the approval of
          the resource owner. The client uses the access token to access the
          protected resources hosted by the resource server.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">Refresh Tokens</span> are credentials used
          to obtain access tokens. Refresh tokens are issued to the client by
          the authorization server and are used to obtain a new access token
          when the current access token becomes invalid or expires, or to obtain
          additional access tokens with identical or narrower scope.
        </p>
      </details>

      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            Compare SQL and NoSQL databases?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">
            SQL or the Structured Query Language
          </span>{' '}
          is the most common and popular programming language for the relational
          database management system. It is a language designed to extract,
          store, insert, delete, update and manage data for structured data and
          strategic analysis. SQL is widely used by top tech companies like
          Facebook, Whatsapp, etc for data processing solutions. It is used for
          different types of RDBMS including Oracle, MySQL, SQLServer, etc
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">NoSQL</span> NoSQL database provides a
          mechanism for the storage and retrieval of data that is modelled other
          than in tabular form. It was introduced by Carl Stroz in the year 1998
          called a Non-relational database. Now, it stands for Not only SQL. It
          is not limited to storing data in tables, instead, enables the big
          data to be stored in the structured, unstructured, semi-structured or
          polymorphic form
        </p>
      </details>

      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            What is express js? What is Nest JS?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">ExpressJs</span> is one such framework
          that accomplishes this. It is a back end framework for Node JS.
          Current, it is being referred to as the de facto framework for apps
          built in Node. A full stack app can be built by using Express, a
          database, a front-end framework (React, Angular, Vue) or any other
          library
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">NestJS</span> is one such framework , on
          the other hand, is highly opinionated. It follow the design paradigm
          of “convention over configuration”. It guides developers to code in a
          certain way and to use tools in a certain way. It is expected of
          developers to write the controllers, service, and repos in certain
          ways. This allows people with a familiarity in the framework to be
          able to jump into different projects because , unlike, Express — Nest
          builds follow similar conventions
        </p>
      </details>
      <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
          <h2 className="text-lg font-medium">
            What is MongoDB aggregate and how does it work?
          </h2>

          <span className="relative h-5 w-5 shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-gray-700">
          <span className="font-bold">MongoDB Aggregation</span> uses an
          aggregate() method to perform the aggregation operations. Basically,
          this aggregation operation practices data records and provides
          calculated results. The aggregation operations assemble values from
          various documents together and are able to execute a range of
          operations, such as average, sum, maximum, minimum, etc., on the
          assembled data to provide only a result. A corresponding of MongoDB
          Aggregation in SQL is count(*) and with the group by. MongoDB
          Aggregation is identical to the aggregate function provided in SQL
        </p>
      </details>
    </div>
  );
}
