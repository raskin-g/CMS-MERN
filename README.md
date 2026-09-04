# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

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