const baseStyles = [
    'color: #fff',
    'display: inline-block',
    'font-size: 11px',
    'line-height: 20px',
    'padding-right: 8px',
    'border-radius: 4px',
];

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
        'background-color: #007bff',
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
        'background-color: #28a745',
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
        'background-color: #17a2b8',
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
        'background-color: #ffc107',
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
        'background-color: #ec2127',
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
