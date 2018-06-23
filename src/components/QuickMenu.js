import * as React from 'react';

const QuickMenu = () => (
	<div className="quick-menu__wrapper">
		<div className="quick-menu__bg-top" />
		<div className="quick-menu__bg-center" />

		<div className="quick-menu">

			<div className="quick-menu__item item1">
				<div className="quick-menu__item-top">
					<a className="quick-menu__link" href="#">Read more</a>
				</div>
				<div className="quick-menu__item-bottom">
					<h3 className="quick-menu__title">Overland Network</h3>
					<p className="quick-menu__description">
						We have a wide experience in overland industry specific logistic solutions like farmaceutical logistics, retail and automotive logistics by train or road.
					</p>
				</div>
			</div>

			<div className="quick-menu__item item2">
				<div className="quick-menu__item-top">
					<a className="quick-menu__link" href="#">Read more</a>
				</div>
				<div className="quick-menu__item-bottom">
					<h3 className="quick-menu__title">Ocean Freight</h3>
					<p className="quick-menu__description">
						We bring your goods safely to worldwide destinations with our great sea fright services. We offer LLC and FLC shipments that are fast and effective with no delays.
					</p>				
				</div>
			</div>

			<div className="quick-menu__item item3">
				<div className="quick-menu__item-top">
					<a className="quick-menu__link" href="#">Read more</a>
				</div>
					<div className="quick-menu__item-bottom">
						<h3 className="quick-menu__title">Air Freight</h3>
						<p className="quick-menu__description">
							 We provide full supply chain management package including cost effective and fast sea freight. You can also combine this package with other means of transportation.
						</p>
					</div>
			</div>
	  </div>
		<div className="quick-menu__bottom-wrapper">
			<div className="quick-menu__bottom">
				<span className="quick-menu__bottom-link-wrapper">
					<a className="quick-menu__bottom-link" href="#">View Details</a>
				</span>
			</div>
		</div>
	</div>
);

export default QuickMenu;