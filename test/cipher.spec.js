
describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });
  
    it('debería retornar "uxmgtogtju&rg&lokyzg&yuxvxkyg" para "organizando la fiesta sorpresa" con offset 6', () => {
      assert.equal(cipher.encode(6, 'organizando la fiesta sorpresa'),'uxmgtogtju&rg&lokyzg&yuxvxkyg');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });
  
    it('debería retornar "organizando la fiesta sorpresa" para "uxmgtogtju&rg&lokyzg&yuxvxkyg" con offset 6', () => {
      assert.equal(cipher.decode(6, 'uxmgtogtju&rg&lokyzg&yuxvxkyg'),'organizando la fiesta sorpresa');
    });
  });

});