import httpStatus from 'http-status'
import { ObjectId, Schema, model } from 'mongoose'
import APIError from '../../errors/ApiError'
import { authCode, authTitle, } from './auth.constants'
import { AuthModel, IAuth } from './auth.interface'
const authSchema = new Schema<IAuth, AuthModel>(
    {
        title: {
            type: String,
            required: true,
            enum: authTitle
        },
        code: {
            type: String,
            required: true,
            enum: authCode
        },
        userId: {
            type: Number,
        },
    },
    { timestamps: true }
)

authSchema.static("updateItemsById", async function updateItemsById(_id: ObjectId, auth: keyof [IAuth]) {
    const updated: IAuth[] = await this.aggregate([
        {
            $match: { _id: { $eq: _id } }
        },
        {
            $project: {
                title: "$title",
                code: "$code",
                userId: "$userId",
            }
        },
        {
            $set: {
                auth
            }
        },
        {
            $merge: {
                into: 'auth'
            }

        }
    ])
    return updated
})

authSchema.static("deleteItemsById", async function deleteItemsById(_id: ObjectId) {
    const deleted: IAuth[] = await this.aggregate([
        {
            $match: { _id: { $eq: _id } }
        }
    ])
    return deleted
})

authSchema.pre('save', async function (next) {
    const exists = await Auth.findOne({
        title: this.title, year: this.userId
    })
    if (exists) {
        throw new APIError(httpStatus.CONFLICT, `An authUser already exists for - ${this.title + ' ' + this.userId}`)
    }
    next()
})

const Auth = model<IAuth, AuthModel>('Auth', authSchema)

export default Auth