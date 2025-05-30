import styles from './Footer.module.scss'
import FooterLogo from '/src/assets/images/footer-Logo.svg'
import SocialIcon1 from '/src/assets/images/Social Icons1.svg'
import SocialIcon2 from '/src/assets/images/Social Icons2.svg'
import SocialIcon3 from '/src/assets/images/Social Icons3.svg'
import SocialIcon4 from '/src/assets/images/Social Icons4.svg'
import SendIcon from '/src/assets/images/send.svg'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.info}>
				<img src={FooterLogo} alt='logo' />
				<p>Copyright © 2020 Nexcent ltd.</p>
				<p>All rights reserved</p>
				<div className={styles.mediaList}>
					<img src={SocialIcon1} alt='instagram' />
					<img src={SocialIcon2} alt='web' />
					<img src={SocialIcon3} alt='x' />
					<img src={SocialIcon4} alt='youtube' />
				</div>
			</div>
			<div className={styles.list}>
				<div className={styles.col}>
					<h2>Company</h2>
					<ul>
						<li>
							<a href='#'>About us</a>
						</li>
						<li>
							<a href='#'>Blog</a>
						</li>
						<li>
							<a href='#'>Contact us</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Testimonials</a>
						</li>
					</ul>{' '}
				</div>
				<div className={styles.col}>
					<h2>Support</h2>
					<ul>
						<li>
							<a href='#'>Help center</a>
						</li>
						<li>
							<a href='#'>Terms of service</a>
						</li>
						<li>
							<a href='#'>Legal</a>
						</li>
						<li>
							<a href='#'>Privacy policy</a>
						</li>
						<li>
							<a href='#'>Status</a>
						</li>
					</ul>{' '}
				</div>
				<div className={styles.col}>
					<h2>Stay up to date</h2>
					<div className={styles.inputBox}>
						<input type='text' placeholder='Your email address' />
						<img src={SendIcon} alt='send' />
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
