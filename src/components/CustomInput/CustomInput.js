import React from 'react';
import styles from './CustomInput.scss';

const CustomInput = ({
    input,
    label,
    type,
    hidden,
    helperText,
    meta: { touched, error, warning },
}) => (
    <div className={styles.formRow}>
        <div className={styles.helperText}>{helperText}</div>
        <input
            className={touched && error ? styles.errorInput : ''}
            {...input}
            placeholder={label}
            type={type}
            hidden={hidden}
            autoComplete="off"
        />
        {
            hidden ? undefined :
                <div className={styles.errorsContainer}>
                    {touched && type !== 'radio' &&
                        ((error && <span>{error}</span>) ||
                        (warning && <span>{warning}</span>))}
                </div>
        }
    </div>
);

export default CustomInput;
