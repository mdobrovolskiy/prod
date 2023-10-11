import { type $api } from 'shared/api/api'
import { type StateSchema } from './StateSchema'

export interface ThunkConfig {
    state: StateSchema
    extra: {
        api: typeof $api
    }
}
