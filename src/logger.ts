const baseStyles = [
    'color: #fff',
    'display: inline-block',
    'font-size: 11px',
    'line-height: 20px',
    'padding-right: 8px',
    'border-radius: 4px',
];

const theme = {
    primary: '#0055a9',
    success: '#009422',
    info: '#17a2b8',
    warning: '#d7a000',
    danger: '#ec2127',
};

/**
 * 輸出訊息
 * @param title 標題
 * @param styles 顯示樣式
 * @param watchData 需要印出的訊息
 */
function messageConsole(title: string, styles: any, ...watchData: any) {
    console.log(`%c ${title}`, styles, ...watchData);
}

/**
 * Primary (深藍)
 * @param title
 * @param watchData
 */
function primary(title: string, ...watchData: any) {
    const styles = baseStyles.concat([
        `background-color: ${theme.primary}`,
    ]).join(';');

    messageConsole(title, styles, ...watchData);
}

/**
 * Success (綠色)
 * @param title
 * @param watchData
 */
function success(title: string, ...watchData: any) {
    const styles = baseStyles.concat([
        `background-color: ${theme.success}`,
    ]).join(';');

    messageConsole(title, styles, ...watchData);
}

/**
 * Info (天藍)
 * @param title
 * @param watchData
 */
function info(title: string, ...watchData: any) {
    const styles = baseStyles.concat([
        `background-color: ${theme.info}`,
    ]).join(';');

    messageConsole(title, styles, ...watchData);
}

/**
 * Warning (黃色)
 * @param title
 * @param watchData
 */
function warning(title: string, ...watchData: any) {
    const styles = baseStyles.concat([
        `background-color: ${theme.warning}`,
    ]).join(';');

    messageConsole(title, styles, ...watchData);
}

/**
 * Danger (紅色)
 * @param title
 * @param watchData
 */
function danger(title: string, ...watchData: any) {
    const styles = baseStyles.concat([
        `background-color: ${theme.danger}`,
    ]).join(';');

    messageConsole(title, styles, ...watchData);
}



const logger = {
    primary,
    success,
    info,
    warning,
    danger,
};

export default logger;
