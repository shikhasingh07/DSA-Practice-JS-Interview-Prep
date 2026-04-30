export default class BackboneModel {
  constructor(initialValues) {
    let Obj = { ...initialValues };
    this._events = {};
    this.Obj = Obj;
  }

  get(attribute) {
    return this.Obj[attribute];
  }

  set(attribute, value) {
    const oldValue = this.Obj[attribute];
    const existed = attribute in this.Obj; // ← check BEFORE setting
    this.Obj[attribute] = value;
    if (existed && oldValue !== value) {
      (this._events["change"]?.[attribute] || []).forEach(
        ({ callback, context }) => {
          callback.call(context, attribute, this.Obj[attribute], oldValue); // context, newVal, oldVal
        },
      );
    }
  }

  has(attribute) {
    return attribute in this.Obj;
  }

  unset(attribute) {
    (this._events["unset"]?.[attribute] || []).forEach(
      ({ callback, context }) => {
        callback.call(context, attribute);
      },
    );
    delete this.Obj[attribute];
    delete this._events["change"]?.[attribute];
    delete this._events["unset"]?.[attribute];
  }

  on(eventName, attribute, callback, context) {
    if (!this._events[eventName]) {
      this._events[eventName] = {};
    }

    if (!this._events[eventName][attribute]) {
      this._events[eventName][attribute] = [];
    }
    this._events[eventName][attribute].push({ callback, context });
  }

  off(eventName, attribute, callback) {
    if (!this._events[eventName]?.[attribute]) return;

    this._events[eventName][attribute] = this._events[eventName][
      attribute
    ].filter((listener) => listener.callback !== callback);
  }
}
