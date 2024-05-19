/** @jest-environment jsdom */

import logger from './logger';

describe('logger', () => {


    it('should logger info', () => {
        const spy = jest.spyOn(console, 'log');
        logger.info('info');
        expect(spy).toHaveBeenCalled();
    });

    it('should logger primary', () => {
        const spy = jest.spyOn(console, 'log');
        logger.primary('primary');
        expect(spy).toHaveBeenCalled();
    });

    it('should logger warning', () => {
        const spy = jest.spyOn(console, 'log');
        logger.primary('warning');
        expect(spy).toHaveBeenCalled();
    });

    it('should logger success', () => {
        const spy = jest.spyOn(console, 'log');
        logger.primary('success');
        expect(spy).toHaveBeenCalled();
    });

    it('should logger danger', () => {
        const spy = jest.spyOn(console, 'log');
        logger.primary('danger');
        expect(spy).toHaveBeenCalled();
    });

});
