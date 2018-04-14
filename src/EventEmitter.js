class EventEmitter{
    constructor(){
        // key存储函数名，value是一个数组，存储函数，类似{'hi':[]}
        this.events = {}
    }

    on(eventName, func){
        //键值对：事件名,函数
        let callbacks = eventName in this.events ? this.events[eventName] : []
        callbacks.push(func)
        this.events[eventName] = callbacks
    }

    off(eventName, func){
        //根据事件名找到函数，然后从函数缓存数组里面删除对应的函数
        if (!eventName in this.events) return
        let callbacks = this.events[eventName]
        let index = callbacks.indexOf(func)
        callbacks.splice(index, 1)
    }
    
    //在函数缓存数组执行所有函数
    emit(eventName, ...args){
        if (!eventName in this.events) return
        const callbacks = this.events[eventName]
        callbacks.map(cb => {
            cb(...args)
        })
    }
}

const event = new EventEmitter
export { event }