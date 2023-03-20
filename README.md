# aragorn-client - using embeddable Aragorn widget
This project contains simple templates for how to use Aragorn's embeddable widget which can be inserted into a host website. It supports JSX, CSS styles, and is compiled using [ParcelJS](https://parceljs.org/) into a single .js and .css file.

## Prerequisite
Before you use the embeddable Aragorn widget in your application. Make sure to configure your mapping template on the [Aragorn platform](https://app.aragorn.ai/). View Aragorn's documentation in our Help center to follow how to get this setup

## Overview
1. The widget is made available by loading in the .js and .css package
2. The host page supplies an html element with the ```.aragorn-embeddable``` class and **configuration attribues**
3. The widget is instantiated when ```AragornEmbedder.initialize()``` is called
4. The widget is rendered in the html element specified by the host page
5. The host page can communicate with the widget via the attributes on the specified html element

## Demo
You can view a demo of how to use the embeddable Aragorn widget in a [pure HTML/Javacript application](https://github.com/aragorn-ai/aragorn-client/tree/main/html-dashboard) as well as a [ReactJS application](https://github.com/aragorn-ai/aragorn-client/tree/main/react-dashboard)
### Usage Example #1: Pure HTML/Javascript
First, reference the necessary .js and .css package in your ```<head>``` tag:

```html
    <head>
    
    <!-- Within this comment is the css and js you need to enable the embeddable code. -->
    
    <!-- Use the below when in sandbox envrionment -->
    <link href="https://static.aragorn.ai/embeddable/dev/index.css" rel="stylesheet" /> 
    <script src="https://static.aragorn.ai/embeddable/dev/index.js" defer></script>
    
    <!-- Use the below when in production environment-->
    <!-- <link href="https://static.aragorn.ai/embeddable/prod/index.css" rel="stylesheet" />
    <script src="https://static.aragorn.ai/embeddable/prod/index.js"></script> -->
    
    <!--------------------------------------------------------------------------------------->
</head>
```

Second, configure the element in which the embeddable Aragorn widget will be inserted. It must have the ```.aragorn-embeddable``` class:

```html
    <div class="aragorn-embeddable" 
    data-token=<INSERT_THE_TOKEN_RETURNED_FROM_PARTNER_API_CALL>
    data-width=<HOW_WIDE_OF_SPACE_THE_WIDGET_SHOULD_TAKE_(ex: "60vw")>
    data-height=<HOW_LONG_OF_SPACE_THE_WIDGET_SHOULD_TAKE_(ex: "60vh")>
    data-primary-color=<YOUR_THEME_COLOR_FOR_PRIMARY_BUTTONS_(ex: "#434ce8")>
    data-secondary-color=<YOUR_THEME_COLOR_FOR_SECONDARY_BUTTONS_(ex: "#d2d4f9")>
    </div>
```


Lastly, initialize your widget. The widget will auto rerender to reflect any updates to the configuration attributes:

```html
    <body onload="window.AragornEmbedder.initialize()">
    </body>
```

### Usage Example #2: ReactJS
First, reference the necessary .js and .css package in your ```<head>``` tag in the index.html:

```html
    <head>
    
    <!-- Within this comment is the css and js you need to enable the embeddable code. -->
    
    <!-- Use the below when in sandbox envrionment -->
    <link href="https://static.aragorn.ai/embeddable/dev/index.css" rel="stylesheet" /> 
    <script src="https://static.aragorn.ai/embeddable/dev/index.js" defer></script>
    
    <!-- Use the below when in production environment-->
    <!-- <link href="https://static.aragorn.ai/embeddable/prod/index.css" rel="stylesheet" />
    <script src="https://static.aragorn.ai/embeddable/prod/index.js"></script> -->
    
    <!--------------------------------------------------------------------------------------->
</head>
```

Second, in whatever component that is responsible for showing the widget, configure the element in which the embeddable Aragorn widget will be inserted. It must have the ```.aragorn-embeddable``` class:

```html
    <div class="aragorn-embeddable" 
    data-token=<INSERT_THE_TOKEN_RETURNED_FROM_PARTNER_API_CALL>
    data-width=<HOW_WIDE_OF_SPACE_THE_WIDGET_SHOULD_TAKE_(ex: "60vw")>
    data-height=<HOW_LONG_OF_SPACE_THE_WIDGET_SHOULD_TAKE_(ex: "60vh")>
    data-primary-color=<YOUR_THEME_COLOR_FOR_PRIMARY_BUTTONS_(ex: "#434ce8")>
    data-secondary-color=<YOUR_THEME_COLOR_FOR_SECONDARY_BUTTONS_(ex: "#d2d4f9")>
    </div>
```


Lastly, in the component responsible for showing the widget, initialize your widget. The widget will auto rerender to reflect any updates to the configuration attributes:

```jsx
     React.useEffect(()=>{
        window.AragornEmbedder.initialize();
    },[])
```


