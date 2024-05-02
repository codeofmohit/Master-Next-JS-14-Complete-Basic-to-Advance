# Master-Next-JS-14-Complete-Basic-to-Advance

Learning Next JS via a YT crash course Master Next JS 14 Complete Basic to Advance from Geeky Shows youtube channel

## ch-2 routing + etc

- 1> Folder structure ✅

- 2> Routing ✅

  - File system based routing
  - /app/directory_name/page.js
  - page.js --> index.js
  - for domain.com/courses/java
    - app/couses/java/page.js
  - Route group ->
    - (course)/java/page.js
      - domain.com/java [would not have to write course, course we have route grouped it with parent route course]
      - directly can navigate to /cpp , /js and /python without including course in route
  - Dynamic routes
    - users/profile/[id]
    - how to get dynamic id -> using params prop in dymaically routed leaf component
      - take out params as a destrutured prop from parent level prop
        - parent level prop : containing 2 keys, params and searchParam function
  - Cath all params
    - after a certail route segment catch/allow all routes entires -> we can make it optionals
    - [...posts]
    - blog/[...posts]/page.js -> optional routes -> will cath any route after blog/posts
      - ex : blog/posts/jan/22/45/any/random will also give page.js
        - then params would be { posts: [ 'posts', 'jan', '22', '45', 'any', 'random' ] }
  - Parallel routes
    - for creating parallel routes, children route directories must start with @, @left and @right
    - the parent dir, must have page and layout
    - in layout destructured props would be
      - children, parent's own page
      - left, right (any parellel routes dir names)
    - now based on any condition in layout of parent, children paralle routes can be handled

- 3> Layout ✅

  - dfine overall structure of the page
  - takes in children(prop) as own or children page content
  - items can be added as per not repeating them, ex: comman header can be added to multiple child and own parent component

- 4> Link ✅

  - as name suggests used for onclick navigation similar to link and a href
  - imported component from next/link
  - will take in route as in href, and link text in bw link components as chlidren

- 5> useRouter hook for navigation (programmitically they said) ✅

  - import useRouter hook from next/navigation
  - const router = useRouter()
  - router.push("/giveRoutePath") on onClick, on whatever behaviour you wannt navigate programatically
  - useRouter is mostly used in clint component rather then server side component however can be used in server side components as well

- 6> client vs server components ✅
  - by default while using app router latest of next js, component are server components
  - we can convert a server component to client / or make a client component by adding a directive "use client" on 1st line of component
  - all react hooks, ui interactive work, should be done using clinet components
  - all data and backedn related work, should be done using server components
