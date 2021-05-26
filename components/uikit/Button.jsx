import styles from '../../styles/uikit/Button.module.scss';

export default function Button(props) {
	const isBlock = props.block ? styles.buttonBlock : '';
	const isSmall = props.size ? styles.buttonSmall : '';
	const classname = `${styles.button} ${isBlock}`

	if (props.as == 'a') {
		return <a className={`${styles.button} ${isBlock}`}>{props.children}</a>;
	}

	return <button className={`${styles.button} ${isBlock}`}>{props.children}</button>;
}
