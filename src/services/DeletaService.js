import Api from '@/services/Api'

export default {
    get () {
        return Api().get('deletas')
    },
    get (deletaId) {
        return Api().get('deleta/' + deletaId)
    },
    post  (deleta) {
        return Api().post('deleta/', deleta)
    },
    put (deleta) {
        return Api().put('deleta/' + deleta.id, deleta)
    },
    delete (deleta) {
        return Api().delete('deleta/' + deleta.id, deleta)
    },
}