import logger from '@acrool/js-logger';



const Example = () => {


    const objectVar = {id: 1, name: 'imaginechiu'};
    const arrayVar = [1, 2, 3, 4];
    const arrayObjVar = [{id: 1, name: 'imaginechiu'}, {id: 2, name: 'selinwu'}, {id: 3, name: 'garychien'}];

    logger.primary('primary', objectVar, arrayObjVar, arrayVar);
    logger.success('success', objectVar, arrayObjVar, arrayVar);
    logger.warning('warning', objectVar, arrayObjVar, arrayVar);
    logger.danger('danger', objectVar, arrayObjVar, arrayVar);
    logger.info('info', objectVar, arrayObjVar, arrayVar);



    return <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', width: '100%'}}>
        <code>
            $ yarn add @acrool/js-logger
        </code>

    </div>;
};

export default Example;




