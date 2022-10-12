import Api from '@/services/Api'

export default {
    get () {
        return Api().get('reads')
    },
    get (readId) {
        return Api().get('read/'+readId)
    },
    post (read) {
        return Api().post('read', read)
    },
    put (read) {
        return Api().put('read/' + read.id, read)
    },
    delete(read) {
        return Api().delete('read/' + read.id, read)
    }
}