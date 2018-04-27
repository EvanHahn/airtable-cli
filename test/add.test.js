const program = require('../src/program')
const Airtable = require('airtable')

function runWithDefaults (...additionalArgs) {
  const defaultArgs = 'add --api-key apikey123 --base base123 --table table123'.split(' ')
  const args = defaultArgs.concat(additionalArgs)
  return program(...args)
}

describe('add', () => {
  it('adds a new record', async () => {
    const fakeCreate = jest.fn().mockImplementation((fields, callback) => { callback(null, {}) })
    const fakeBase = jest.fn().mockImplementation(() => ({ create: fakeCreate }))
    jest.spyOn(Airtable.prototype, 'base').mockImplementation(() => fakeBase)

    const exitCode = await runWithDefaults(
      'fieldname1', 'field value 1',
      'field name 2', 'fieldValue2'
    )

    expect(exitCode).toEqual(0)
    expect(Airtable.prototype.base).toHaveBeenCalledWith('base123')
    expect(fakeBase).toHaveBeenCalledWith('table123')
    expect(fakeCreate).toHaveBeenCalledWith({
      fieldname1: 'field value 1',
      'field name 2': 'fieldValue2'
    }, expect.any(Function))
  })
})
