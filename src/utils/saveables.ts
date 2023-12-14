import { ref, reactive, computed, ComputedRef } from 'vue'
import { get, post, put, patch, del } from '@/utils/APIInteraction';


class APIGeneralObject{
  name: string
  endpoint: string
  isFetched: boolean
  _fetchPromise: null | Promise<any> | any
  value: any

  constructor(name: string, endpoint: string, defaultValue = {}) {
    // Identification
    this.name = name;
    this.endpoint = endpoint;

    // Value and fetching
    this.isFetched = false;
    this._fetchPromise = null;
  }

  clear() {
    throw new Error('clear not implemented')
  }

  responseToValue(response: any) {
    throw new Error('reponseToValue not implemented')
  }
  async fetch(force: boolean = false) {
    if (!this.isFetched || force) {
      if (!this._fetchPromise || force) {
        this._fetchPromise = await this._fetchValueFromServer().then(response => {
          this.clear()
          this.responseToValue(response)
          this.isFetched = true;
          return
        }).catch(error => {
          console.error('Error fetching value from the server:', error);
          throw error;
        });
      }
    }
    return this._fetchPromise;
  }

  async _fetchValueFromServer() {
    try {
      const response = await get(this.endpoint, this.name);
      return response;
    } catch (error) {
      console.error('Error fetching value from the server:', error);
      throw error;
    }
  }

  create(json: object){
    post(this.endpoint, json, 'post' + this.name)
      .then(response => this.responseToValue(response))
      .then(() => console.log(this.value))
      .catch((e) => console.log(this.name, 'Error in create', e))
  }

  update_object(id: string, json: object){
    this.fetch()
      .then(() => put(this.endpoint + id + '/', json, 'put' + this.name))
      .then(response => this.responseToValue(response))
      .catch(() => console.log(this.name, 'Error in update object'))
  }

  update_values(id: string, json: object){
    this.fetch()
      .then(() => patch(this.endpoint + id + '/', json, 'patch' + this.name))
      .then(response => this.responseToValue(response))
      .catch(() => console.log(this.name, 'Error in update value'))
  }

  update_value(id: string, key: string, value: any){
    console.log('id', id, 'key', key, 'val', value)
    let json = {[key]: value}
    this.update_values(id, json)
  }

  delete(id: string){
    this.fetch()
      .then(() => del(this.endpoint + id + '/', 'delete' + this.name))
      .then(response => this.value.delete(id))
      .catch(() => console.log(this.name, 'Error in delete'))
  }
}

class APIMapObject extends APIGeneralObject{
  list: ComputedRef<Array<any>>
  constructor(name: string, endpoint: string, defaultValue = {}) {
    super(name, endpoint, defaultValue)  
    this.value = reactive(new Map(Object.entries(defaultValue)));

    // Computed properties
    this.list = computed(() => {
      let list = []
      for (let [id, item] of this.value.entries()){
        item['id'] = id
        list.push(item)
      }
      return list
    });
  }

  clear() {
    this.value.clear()
  }

  responseToValue(response: any){
    for (const [key, value] of Object.entries(response.data)) {
      this.value.set(key, value);
    }
  }
}


class APIDictObject extends APIMapObject {
  responseToValue(response: any){
    if (response.data.length == 0){
      return
    } else if (Array.isArray(response.data)) {
      for (const [key, value] of Object.entries(response.data[0])) {
        this.value.set(key, value);
      }
    } else {
      super.responseToValue(response)
    }
  }

  update_self(json: object){
    if (this.value.get('id') !== undefined){
      super.update_object(
        this.value.get('id'),
        json
      )
    } else {
      this.create(json)
    }
  }

  update_value(key: string, value: any){   
    if (this.value.get('id') !== undefined){
      super.update_value(
        this.value.get('id'),
        key,
        value
      )
    } else {
      console.log(this.name, 'Update while ID is undefined')
    }
  }

  update_values(json: object){   
    if (this.value.get('id') !== undefined){
      super.update_values(
        this.value.get('id'),
        json
      )
    } else {
      console.log(this.name, 'Update while ID is undefined')
    }
  }


  delete(key: string){    
    this.fetch()
      .then(() => del(this.endpoint + key + '/', 'delete' + this.name))
      .then(response => this.value.delete(key))
      console.log(this.name)
  } 
}

class APIListObject extends APIGeneralObject{
  constructor(name: string, endpoint: string, defaultValue = []) {
    super(name, endpoint, defaultValue)
    this.value = reactive([])
  }

  clear() {
    this.value.splice(0)
  }

  responseToValue(response: any){
    console.log('for', this.name)
    console.log(response.data)
    if(Array.isArray(response.data)){
      response.data.forEach((item: object) => {
        this.value.push(item)
      })
    } else {
      this.value.push(response.data)
    }
  }
}

export { APIMapObject, APIDictObject, APIListObject }