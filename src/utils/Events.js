const events = new Map();

export default {
    $on(eventName, fn){
        if (!events.has(eventName)){
            events.set(eventName, []);
        }

        events.get(eventName).push(fn);
    },

    $off(eventName, fn){
        throw {message: 'Not implemented'};
    },

    $emit(eventName, data) {
        if (events.has(eventName)){
            events.get(eventName).forEach(fn => fn(data));
        }
    }

};

/*в App мы присваиваем функцию то есть нам на этом этапе вообще не важно что там,
это обозначение только логики а не вызова,
а вот в NavLink $emit уже вызывает все функции которые мы определили к данным что передаем в данном случает index*/