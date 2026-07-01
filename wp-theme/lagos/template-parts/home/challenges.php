<?php
/**
 * Challenges section.
 *
 * @package Lagos_Financial
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$lagos_challenges_img = lagos_fe_theme_image_url( 'challenges-img.png' );
?>
<section class="home-challenges">
	<div class="container">
		<div class="home-challenges__grid">
			<div <?php echo lagos_fe_aos_attrs( 'animate-slide-left', 0, 'home-challenges__content' ); ?>>
				<div class="home-challenges__badge">Common Challenges</div>
				<h2 class="home-challenges__title font-neulis">
					Your Mortgage Broker<br>for Financial Freedom
				</h2>
				<p class="home-challenges__accent font-neuliscursive">Work With Specialists Who Care</p>
				<p class="home-challenges__text">
					With financial services offices now available in both Launceston and Bondi, Sydney, we&apos;re here to help
					you reach your goals with expert mortgage advice and access to 60+ lenders.
				</p>
				<ul class="home-challenges__list">
					<?php foreach ( lagos_fe_pain_points() as $point ) : ?>
						<li>
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true"><path d="M25.9984 11.0476C25.6646 10.711 25.4765 10.2566 25.4747 9.78256V8.18506C25.4734 7.21389 25.0869 6.2829 24.4001 5.5963C23.7132 4.9097 22.7821 4.52355 21.8109 4.52256H20.2159C19.981 4.52317 19.7483 4.47732 19.5312 4.38765C19.3141 4.29798 19.1169 4.16625 18.9509 4.00006L17.5884 2.63631C16.9009 1.95054 15.9694 1.56543 14.9984 1.56543C14.0274 1.56543 13.0958 1.95054 12.4083 2.63631L11.0458 4.00006C10.8799 4.16648 10.6828 4.29844 10.4657 4.38833C10.2486 4.47821 10.0159 4.52426 9.78088 4.52381H8.18463C7.21346 4.5248 6.28234 4.91095 5.5955 5.59755C4.90867 6.28415 4.5222 7.21514 4.52088 8.18631V9.78256C4.51961 10.2561 4.3319 10.7101 3.99838 11.0463L2.63338 12.4101C1.94761 13.0976 1.5625 14.029 1.5625 15.0001C1.5625 15.9711 1.94761 16.9025 2.63338 17.5901L3.99838 18.9526C4.3322 19.2892 4.52031 19.7435 4.52213 20.2176V21.8151C4.52345 22.7862 4.90992 23.7172 5.59675 24.4038C6.28359 25.0904 7.21471 25.4766 8.18588 25.4776H9.78088C10.0159 25.4771 10.2486 25.5231 10.4657 25.613C10.6828 25.7029 10.8799 25.8349 11.0458 26.0013L12.4083 27.3638C13.0958 28.0496 14.0274 28.4347 14.9984 28.4347C15.9694 28.4347 16.9009 28.0496 17.5884 27.3638L18.9509 26.0013C19.1169 25.8349 19.3141 25.7029 19.5312 25.613C19.7483 25.5231 19.981 25.4771 20.2159 25.4776H21.8109C22.7821 25.4766 23.7132 25.0904 24.4001 24.4038C25.0869 23.7172 25.4734 22.7862 25.4747 21.8151V20.2176C25.4765 19.7435 25.6646 19.2892 25.9984 18.9526L27.3634 17.5901C28.0492 16.9025 28.4343 15.9711 28.4343 15.0001C28.4343 14.029 28.0492 13.0976 27.3634 12.4101L25.9984 11.0476Z" fill="#FFA37C"/><path d="M13.7501 18.4376C13.6269 18.4379 13.5049 18.4137 13.3912 18.3665C13.2775 18.3193 13.1743 18.25 13.0876 18.1626L10.5876 15.6626C10.422 15.4848 10.3318 15.2498 10.3361 15.0069C10.3404 14.764 10.4388 14.5323 10.6105 14.3605C10.7823 14.1888 11.014 14.0904 11.2569 14.0861C11.4998 14.0818 11.7348 14.172 11.9126 14.3376L13.7501 16.1738L18.0876 11.8376C18.2653 11.672 18.5003 11.5818 18.7432 11.5861C18.9861 11.5904 19.2178 11.6888 19.3896 11.8605C19.5613 12.0323 19.6597 12.264 19.664 12.5069C19.6683 12.7498 19.5782 12.9848 19.4126 13.1626L14.4126 18.1626C14.3258 18.25 14.2226 18.3193 14.1089 18.3665C13.9952 18.4137 13.8732 18.4379 13.7501 18.4376Z" fill="white"/></svg>
							<span><?php if ( ! empty( $point['strong'] ) ) : ?><strong><?php echo esc_html( $point['strong'] ); ?></strong><?php endif; ?><?php echo esc_html( $point['text'] ); ?></span>
						</li>
					<?php endforeach; ?>
				</ul>
			</div>

			<div <?php echo lagos_fe_aos_attrs( 'animate-slide-right', 0, 'home-challenges__media' ); ?>>
				<img
					src="<?php echo esc_url( $lagos_challenges_img ); ?>"
					alt="Woman looking stressed at laptop researching home loans"
					loading="lazy"
					width="510"
					height="534"
				>
				<?php foreach ( lagos_fe_challenge_badges() as $badge ) : ?>
					<div class="<?php echo esc_attr( $badge['class'] ); ?>"><?php echo esc_html( $badge['text'] ); ?></div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
