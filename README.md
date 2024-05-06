# Master-Next-JS-14-Complete-Basic-to-Advance

Learning Next JS via a YT crash course Master Next JS 14 Complete Basic to Advance from Geeky Shows youtube channel

## ch-2 routing + etc - day-1-2-May-2024

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

## Day - 2 - 3 may 2024

- 7> Using different types of css ✅

  - global css - already know
  - module css - if only want to use in any specific component
    - create a css module - nothing but plain css file with extension - cssFileName.module.css
    - import as styles from cssFileName
    - class/id can be accessed via style.class_id_name
  - css classname are pre-hashed via nextJs -> optimization feature

- 8> Using Images (auto optimised) ✅

  - import Image component from next/image, for optimised image usage
  - simply import image of choice
  - use it as scr in Image component
  - Image coponent takes a lot of props for both styling and optimizing, read on docs

- 9> Fetching data - using fetch
  - nothing new just plaing age old data fetching via fetch api,
  - cool thing is since we are fetching data from server using fetch, browser is not making api calls, server is making calls, and it is faster
  - can not use useState and client component things unles making the component client component

## ch-3 - backend | Day - 2 - 3 may 2024

- The work which people use to do in laravel, expres, django can now be done in next js only

- 10> creating API(s) / API Routes ✅

  - next made it super simple
  - create api/products/route.js inside app folder
  - will point to api route -> api/products
  - route.js will be your executation code
    - in it simple named export GET/PUT/POST/DELETE/PATCH as functions
    - each funciton can take req object as param
    - for example for a get request return json data
      - we can use return NextResponse.json(productList)
        - when NextResponse in imported from next/server, takes in json data to be served
  - Note : only name export method functions

💡 Note : both http requests and response have some comman and some unique elements ✅

- comman elements : headers, and content-type, cookies(optional), body(optional)
- specfic to http request : url, method
- specidic to http responsie : status code

- 11> in GET - how to access request headers ✅

  - the req object of GET method of api has, req.headers which can be used to access request headers
  - for bit more work : Header interface object can be created | pure JS not specific to next
    - Header interface object, do have extra properties and method for usecases

- 12> in GET - how to get url query params

  - again req.url will get complete url which is being request
  - will create an instance of URL interface will pass in req.url
  - now that instance will have searchParams as object which can be used to get the query search params
  - now searchParam will give access to its methods, for manupilating query params

- 13> in GET - Cookies ✅

  - cookies are nothing but small data sent from web server to browser/client to remember their visit to particular site/app [remembering login settings, display settings, etc]
  - req.cookies;
  - cookies() from next/headers

## ❌ 1 day gap - learnt mongoDB in 1 day ❌

## ch-3 - backend | Day - 3 - 5 may 2024

- 14> in POST req ✅

  - Note : get and post are hitting on next js own server=
  - in post req alway mostly we post/send data to server
  - hence, via postman we will post 2 types of data
    - body - json
      - req.json()
    - body - formdata
      - req.formData()
        - formData().get() - further object can be extracted

- 15> dymanic api route ✅

  - folder name [id] -> route.js
  - in the api method function > GET/POST,
  - take in a second argument as context
  - which which contain dynamic param as id

- 16> make 3rd party api request from server ✅
  - api request which are being made from next js server are more safe
  - so for imroved security
  - what one can do is , we can create a next js api
  - now whatever public api we need to call can be called from hitting our next js api
  - flow
    - we hit next js api -> next js api will hit the pubic api -> and will give the data

## ch-4 - mongoDB | Day - 3 - 5 may 2024

- 17> making db connection via mongoose ✅

  - make a mongoDB connection file
  - store creds in env file
  - install mongoose which will make the connection to next app to mongo db
  - write basic mongoose connection script
  - run connection script wherever you want to make connection

- 18> defining schema and model using mongoose model syntax ✅

- 19> then simple making get and post requests as per code and updating the UI with content ✅

- 20> Server Actions : ✅
  - directly we can call find()/create() in server component itself, no need to make api or writing code to handle fetc and all
  - while posting the data make use of form action and use server action there
