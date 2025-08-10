const baseStyles = [
    'color: #fff',
    'display: inline-block',
    'font-size: 11px',
    'line-height: 20px',
    'padding-right: 8px',
    'border-radius: 4px',
];

const theme = {
    log: '#b6b6b6',
    primary: '#8b7ec8',
    success: '#70ad47',
    info: '#5fb3d3',
    warning: '#f5c842',
    danger: '#e85a4f',
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
 * Log
 * @param title
 * @param watchData
 */
function log(title: string, ...watchData: any) {
    messageConsole(title, '', ...watchData);
}

/**
 * Primary
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
 * Success
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
 * Info
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
 * Warning
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
 * Danger
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
    log,
    primary,
    success,
    info,
    warning,
    danger,
};

export default logger;
