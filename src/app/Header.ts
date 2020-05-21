class Header {

  private _textHeading: string = 'Olá Header'

  constructor() { }

  getMyHeading() {
    return this._textHeading
  }
}

export { Header }