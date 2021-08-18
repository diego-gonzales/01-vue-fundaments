import { shallowMount } from '@vue/test-utils';
import Indecision from '@/components/Indecision';


describe('Indecision Component', () => {
    let wrapper;
    let clgSpy;
    // mock de un fetch que será muy útil en muchos casos (video 81 de curso Vue)
    global.fetch = jest.fn( () => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif'
        })
    }));

    beforeEach(() => {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log'); // explicado en el video 78 de curso de Vue
        // clgSpy.mockClear(); // se puede limpiar uno por uno
        // debemos limpiar todos los mocks, ya que se mantiene la referencia (video 80, min 6)
        jest.clearAllMocks();
    });

    test('should match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('nothing should happen when I type on the input, except (console.log)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');
    
        const input = wrapper.find('input');
        await input.setValue('Hello World');

        expect(clgSpy).toHaveBeenCalled();
        expect(getAnswerSpy).not.toHaveBeenCalled();
    });

    test('should trigger getAnswer() when I type question mark (?)', async() => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer'); // lo podría inicializar arriba para evitar repetir codigo

        const input = wrapper.find('input');
        await input.setValue('Hello World?');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toBeCalled();
    });
    
    test('test on getAnswer() method', async() => {
        await wrapper.vm.getAnswer();

        const image = wrapper.find('img');

        expect(image.exists()).toBeTruthy();
        expect(wrapper.vm.image).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('Sí!');
    });

    test('test on getAnswer() method - Fail on API', async() => {
        fetch.mockImplementationOnce( () => Promise.reject('API is down') );

        await wrapper.vm.getAnswer();

        const image = wrapper.find('img');

        expect(image.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('API could not be loaded');
    });

});