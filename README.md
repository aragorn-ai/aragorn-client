# aragorn-client - using embeddable Aragorn widget

This project contains simple templates for how to use Aragorn's embeddable widget which can be inserted into a host website. It supports JSX, CSS styles, and is compiled using [ParcelJS](https://parceljs.org/) into a single .js and .css file.

## Prerequisite

Before you use the embeddable Aragorn widget in your application. Make sure to configure your workspace API key on the Aragorn platform. View Aragorn's documentation in our Help center to follow how to get this setup

## Overview

1. The widget is made available by loading in the .js and .css package
2. The host page supplies an html element with `aragorn-embeddable` as the id
3. The widget is instantiated when `AragornEmbedder.initialize(props)` is called which accepts **configuration arguments**
4. The widget is rendered in the html element specified by the host page
5. The host page can communicate with the widget via the AragornEmbedder window object

## Demo

You can view a demo of how to use the embeddable Aragorn widget in a [pure HTML/Javacript application](https://github.com/aragorn-ai/aragorn-client/tree/main/html-dashboard) as well as a [ReactJS application](https://github.com/aragorn-ai/aragorn-client/tree/main/react-dashboard)

### Usage Example #1: Pure HTML/Javascript

First, reference the necessary .js and .css package in your `<head>` tag:

```html
<head>
  <!-- Within this comment is the css and js you need to enable the embeddable code. -->

  <!-- Use the below when in sandbox envrionment -->
  <link
    href="https://static.aragorn.ai/embeddable/dev/index.css"
    rel="stylesheet"
  />
  <script
    src="https://static.aragorn.ai/embeddable/dev/index.js"
    defer
  ></script>

  <!-- Use the below when in production environment-->
  <!-- <link href="https://static.aragorn.ai/embeddable/prod/index.css" rel="stylesheet" />
    <script src="https://static.aragorn.ai/embeddable/prod/index.js"></script> -->

  <!--------------------------------------------------------------------------------------->
</head>
```

Second, add the element in which the embeddable Aragorn widget will be inserted. It must have `aragorn-embeddable` for an id:

```html
<div id="aragorn-embeddable"></div>
```

Lastly, initialize your widget with the proper configuration arguments.

```html
<body
  onload="window.AragornEmbedder.initialize({
        widgetToken:'<GENERATED_TOKEN_FROM_PARTNER_API>',
        widgetHeight:'90vh',
        primaryColor:'#111827'
    })"
></body>
```

Below is the definition of all the possible configuration arguments for the AragornEmbedder.initialize function

```js
/**
 * @param {string} widgetToken - REQUIRED. The generated token from our partner API required to initialize widget and access.
 
 * @param {string} widgetHeight - REQUIRED. The height of space this widget should take. Widget already has a forced min-width of 850px
 
 * @param {string} primaryColor - OPTIONAL. If no customTheme is provided, this will be used for any buttons in the widget. Default is Aragorn's theme colors
 
 * @param {ITheme} customTheme - OPTIONAL. Specification of font and colors, this will be used for any element in the widget. Default is Aragorn's theme specification
 */
```

To update the token passed to the widget in the case where the token expires completely. Call the AragornEmbedder.updateWidget function which also accepts the configuration arguments shown above

### Usage Example #2: ReactJS

First, reference the necessary .js and .css package in your `<head>` tag in the index.html:

```html
<head>
  <!-- Within this comment is the css and js you need to enable the embeddable code. -->

  <!-- Use the below when in sandbox envrionment -->
  <link
    href="https://static.aragorn.ai/embeddable/dev/index.css"
    rel="stylesheet"
  />
  <script
    src="https://static.aragorn.ai/embeddable/dev/index.js"
    defer
  ></script>

  <!-- Use the below when in production environment-->
  <!-- <link href="https://static.aragorn.ai/embeddable/prod/index.css" rel="stylesheet" />
    <script src="https://static.aragorn.ai/embeddable/prod/index.js"></script> -->

  <!--------------------------------------------------------------------------------------->
</head>
```

Second, in whatever component that is responsible for showing the widget, configure the element in which the embeddable Aragorn widget will be inserted. It must have `aragorn-embeddable` as the id:

```html
<div id="aragorn-embeddable"></div>
```

Lastly, in the component responsible for showing the widget, initialize your widget with the proper configuration arguments

```jsx
     React.useEffect(()=>{
        window.AragornEmbedder.initialize({
            widgetToken:: '<GENERATED_TOKEN_FROM_PARTNER_API>',
            widgetHeight: '980px',
            customTheme: {...}
        });
    },[])
```

### Custom theme specication

The customTheme argument is of type ITheme. Below is the definition of ITheme

```js
interface ITheme {
  palette: {
    foreground: string,
    background: string,
    singleton: {
      white: string,
      black: string,
    },
    primary: IPalette,
    secondary: IPalette,
    accent: IPalette,
    error: IPalette,
    danger: IPalette,
    success: IPalette,
    info: IPalette,
    warning: IPalette,
    coolGray: IPalette,
  };
  typography: {
    fontFamily: string,
    monoFontFamily: string,
    defaultColor: string,
    font: {
      weight: IFontWeight,
      size: {
        extraSmall_2: IFontSize,
        extraSmall: IFontSize,
        small: IFontSize,
        medium: IFontSize,
        large: IFontSize,
        extraLarge: IFontSize,
        extraLarge_2: IFontSize,
        extraLarge_3: IFontSize,
        extraLarge_4: IFontSize,
      },
      heading: {
        h1: IHeading,
        h2: IHeading,
        h3: IHeading,
        h4: IHeading,
        h5: IHeading,
        h6: IHeading,
      },
    },
  };
}

interface IPalette {
  shade50: string;
  shade100: string;
  shade200: string;
  shade300: string;
  shade400: string;
  shade500: string;
  shade600: string;
  shade700: string;
  shade800: string;
  shade900: string;
}

interface IFontWeight {
  regular: number;
  semiMedium: number;
  medium: number;
  semiBold: number;
  bold: number;
  black: number;
}

interface IFontSize {
  fontSize: string;
  lineHeight?: string;
  letterSpacing?: string;
}

interface IHeading {
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
}
```
