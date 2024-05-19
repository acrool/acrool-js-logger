import logger from '@acrool/js-logger';
import './App.css';
import './bootstrap-base.min.css';

const objectVar = {id: 1, name: 'imaginechiu'};
const arrayVar = [1, 2, 3, 4];
const arrayObjVar = [{id: 1, name: 'imaginechiu'}, {id: 2, name: 'selinwu'}, {id: 3, name: 'garychien'}];

logger.primary('primary', objectVar, arrayObjVar, arrayVar);
logger.success('success', objectVar, arrayObjVar, arrayVar);
logger.warning('warning', objectVar, arrayObjVar, arrayVar);
logger.danger('danger', objectVar, arrayObjVar, arrayVar);
logger.info('info', objectVar, arrayObjVar, arrayVar);


function App() {

    return (
        <div className="App">
            <h1>Acrool JS Console</h1>
            <code>
                $ yarn add @acrool/js-logger
            </code>
        </div>
    );
}

export default App;
