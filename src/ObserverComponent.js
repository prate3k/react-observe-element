import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ObserverComponent extends PureComponent {
	static propTypes = {
		children: PropTypes.element,
		className: PropTypes.string,
		onShow: PropTypes.func,
		once: PropTypes.bool,
		visiblePercentage: PropTypes.oneOf(PropTypes.number, PropTypes.arrayOf(PropTypes.number)),
		offset: PropTypes.shape({
			left: PropTypes.number,
			right: PropTypes.number,
			top: PropTypes.number,
			bottom: PropTypes.number
		}),
		setRootContainer: PropTypes.func
	};

	static defaultProps = {
		once: false,
		offset: {
			left: 0,
			right: 0,
			top: 0,
			bottom: 0
		},
		visiblePercentage: 1
	};

	constructor(props) {
		super(props);
		this.observer = null;
		this.container = null;
	}

	stopObserving = () => {
		this.container && this.observer && this.observer.unobserve(this.container);
	};

	startObserving = () => {
		this.container && this.observer.observe(this.container);
	};

	handleIntersect = enteries => {
		enteries.filter(entry => entry.isIntersecting).map(entry => {
			typeof this.props.onShow === 'function' && this.props.onShow(entry);
		});
		if (this.props.once) {
			this.stopObserving();
		}
	};

	initObserve = () => {
		let {visiblePercentage, offset} = this.props;
		let root = null;
		if (typeof this.props.setRootContainer === 'function') {
			root = this.props.setRootContainer();
		}
		this.observer = new IntersectionObserver(this.handleIntersect, {
			root,
			threshold: visiblePercentage,
			rootMargin: `${offset.top}px ${offset.right}px ${offset.bottom}px ${offset.left}px`
		});
		this.startObserving();
	};

	componentDidMount() {
		this.initObserve();
	}

	componentDidUpdate() {
		this.stopObserving();
		this.initObserve();
	}

	componentWillUnmount() {
		this.stopObserving();
	}

	containerRef = c => this.container = c;

	render() {

		return (<div className={this.props.className} ref={this.containerRef}>
			{this.props.children}
		</div>);
	}
}
