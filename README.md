# Frontend with React
- DOM (Document Object Modeling)
- Keep everything inside `src/` folder
- Use `public/` folder unless you need to load some static files like css/images

## React component
- It should be always a js/ts function
- Function name must start with Capital letter alphabet

## React Props and State
- **Props**
- Any data passed as an argument or params to the component
- Its of type object
- Props are readonly
```jsx
fucntion ComponentName(props: Readonly<{propsName: DataType}>){
  return (<>Jsx</>)
}
or
fucntion ComponentName({propsName, ..., children}:props: Readonly<{propsName: DataType, ..., children: ReachNode}>){
  return (<>Jsx</>)
}

//uasages
<ComponentName propsName={value} ...>
</ComponentName>
```
- Every components have a default props named 'children'

## Reach Web-hook
- Web-hook are special functions given by react that helps you to maintian different states of the component
- All hooks start with `use` keyword
- Hooks are only allowed in react functional component
- Hooks are always client side data
- Types
  - **useState:** mantains the state of component
  - **useEffect:** handles the render or state/props change of the components [aka sideeffct hooks]
  ```
    import {useEffect} from react;
      // effect hook
    useEffect(()=>{
        console.log("I am always execute")
    })

    useEffect(()=>{
        console.log("Only executes once when the component is loaded first")

    },[])

    useEffect(()=>{
        console.log("ONly when credentials state is changed manipulated")
    },[credentials])

  ```
  - **useContext:** to maintain a global state in the react project
  - **useCallback & useMemo:** used to maintain and optimize the react project states
  - **useRef:** to reference to any html element(mainly form blocks) from the child components or of different level

# Input
- **Controlled Input**
- **Uncontrolled Input**

# Webstorage
- The storage provided by client-side applications (browser)
- Can only store text
- eg. cookies, localstorage, session storage, cache, indexedB, firebase storage

# Global State (react/next application)
- context API
- Redux, zustand, jotai, etc ... 

# Cookies
- Client side storage unit
- size: A cookie cant have more than 4096 bytes 4KB - name, value, all other attributes
- Quantity: Min support 20 qyantitiy, max: chrome: 180, fireforx: 150, safari:50, edge: 50
- Expiry: Chrome, Fireforx, Edge: 400 day expiry, Safari: 7 days
- `document.cookies` => `js-cookie`


# API (Third Party)
- Data Database (SQL server, NoSQL server) (<====> Nodejs/php/python/java/.net <====>) Application(React, Mobile app, Desktop)
- Type: REST (REST, SOAP, GRAPHQL, gRPC, socket(WS))
- CRUD => Create `post`, Read `get`, Update `put` or `patch`, Delete `delete`