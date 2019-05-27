# reactify-observe
> 4KB (gzipped) React Component equivalent implementation of IntersectionObserver.observe()


##### Install the package :
```bash
npm install reactify-observer --save
```

##### Import the component (including IntersectionObserver polyfill) :
```javascript
import ObserverElement from 'reactify-observer';
```

##### Import just the component (without IntersectionObserver polyfill) :
```javascript
import ObserverElement from 'reactify-observer/ObserverComponent';
```

##### Usage : 
```javascript
1. <ObserverElement {...props} /> // In this case it observe itself

2. <ObserverElement {...props}>
        {component} // Component which you want to observe 
   </ObserverElement>
```

#### Component Properties :
It contains set of options instructing component when to start observing, notify once it comes to viewport etc. Properties are define like this :
> type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; mandatory &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; defaultValue

<br/>

##### props.children :
> any  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_optional_

Component you want to observe. If its not defined it will observe itself.

```javascript
<ObserverComponent>
    {html_or_custom_component_to_observe}
</ObserverComponent>
```
<br/>

##### props.className :
> String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; optional &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ''

Custom class name you want to assign to wrapper container
```javascript
<ObserverComponent className="<your_custom_class>" />
```
<br/>

##### props.onShow :
> Function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; optional

Callback function which gets called when its gets shown to viewport (depends on the visiblePercentage defined).

```javascript
function onElementShown(entry) { // This function will get call once element gets shown
	< your_custom_logic >
}

<ObserverComponent onShow={onElementShown} />
```
Argument passed to onShow callback function is of type [IntersectionObserverElement](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry).
<br/>

##### props.once :
> Boolean &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; optional &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; false

If set to true, once element comes to viewport it will stop observing it.

```javascript
<ObserverComponent once />
```
<br/>

##### props.visiblePercentage :
> number or number[] &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; optional &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1

Similar to [threshold](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) option of IntesectionObserver.
```javascript
<ObserverComponent visiblePercentage={0.5} />

<ObserverComponent visiblePercentage={[0, 0.5, 1]} />
```
<br/>

##### props.offset :
> String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; optional &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { top: 0, left: 0, right: 0, bottom: 0 }

Similar to [rootMargin](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options) option of IntesectionObserver
```javascript
<ObserverComponent offset={{
	top: 10,
	bottom: 0,
	left: 0,
	right: 0
}}/>
```
<br/>

##### props.setRootContainer :
> Function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; optional

> Return Value : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; DOMElement

Used to specify the root container, with respect to which component will be observed. If the function does not return anything or its not specified, it by default takes viewport.
```javascript
function setRootContainerFn () {
	return < some_other_dom_container_ref >;
}
<ObserverComponent setRootContainer={setRootContainerFn} />
``` 

License
-
[MIT](https://github.com/prate3k/reactify-observe/blob/master/LICENSE)
