- A dynamic Splash effect view to put above buttons or other views.

- It comes with a built-in TypeScript typings and is compatible with all popular JavaScript frameworks. You can use it directly or leverage well-maintained wrapper packages that allow for a more native integration with your frameworks of choice.

# Example:

![](./assets/videos/1.gif)

## How to use:

- remember to put overflow: "hidden" on the outher view.

```

<TouchableOpacity style={{width:100, height:100, overflow: "hidden",}}>
<Splash width={100} height={100} />
</>
```

## props

| Name     | Type   | Default |
| -------- | ------ | ------- |
| height   | number |
| width    | number |
| duration | number |
