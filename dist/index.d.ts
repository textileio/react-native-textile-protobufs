import * as $protobuf from "protobufjs";
/** Properties of a CafeChallenge. */
export interface ICafeChallenge {

    /** CafeChallenge address */
    address?: (string|null);
}

/** Represents a CafeChallenge. */
export class CafeChallenge implements ICafeChallenge {

    /**
     * Constructs a new CafeChallenge.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeChallenge);

    /** CafeChallenge address. */
    public address: string;

    /**
     * Creates a new CafeChallenge instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeChallenge instance
     */
    public static create(properties?: ICafeChallenge): CafeChallenge;

    /**
     * Encodes the specified CafeChallenge message. Does not implicitly {@link CafeChallenge.verify|verify} messages.
     * @param message CafeChallenge message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeChallenge message, length delimited. Does not implicitly {@link CafeChallenge.verify|verify} messages.
     * @param message CafeChallenge message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeChallenge, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeChallenge message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeChallenge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeChallenge;

    /**
     * Decodes a CafeChallenge message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeChallenge
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeChallenge;

    /**
     * Verifies a CafeChallenge message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeChallenge message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeChallenge
     */
    public static fromObject(object: { [k: string]: any }): CafeChallenge;

    /**
     * Creates a plain object from a CafeChallenge message. Also converts values to other types if specified.
     * @param message CafeChallenge
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeChallenge, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeChallenge to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeNonce. */
export interface ICafeNonce {

    /** CafeNonce value */
    value?: (string|null);
}

/** Represents a CafeNonce. */
export class CafeNonce implements ICafeNonce {

    /**
     * Constructs a new CafeNonce.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeNonce);

    /** CafeNonce value. */
    public value: string;

    /**
     * Creates a new CafeNonce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeNonce instance
     */
    public static create(properties?: ICafeNonce): CafeNonce;

    /**
     * Encodes the specified CafeNonce message. Does not implicitly {@link CafeNonce.verify|verify} messages.
     * @param message CafeNonce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeNonce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeNonce message, length delimited. Does not implicitly {@link CafeNonce.verify|verify} messages.
     * @param message CafeNonce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeNonce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeNonce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeNonce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeNonce;

    /**
     * Decodes a CafeNonce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeNonce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeNonce;

    /**
     * Verifies a CafeNonce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeNonce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeNonce
     */
    public static fromObject(object: { [k: string]: any }): CafeNonce;

    /**
     * Creates a plain object from a CafeNonce message. Also converts values to other types if specified.
     * @param message CafeNonce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeNonce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeNonce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeRegistration. */
export interface ICafeRegistration {

    /** CafeRegistration address */
    address?: (string|null);

    /** CafeRegistration value */
    value?: (string|null);

    /** CafeRegistration nonce */
    nonce?: (string|null);

    /** CafeRegistration sig */
    sig?: (Uint8Array|null);

    /** CafeRegistration token */
    token?: (string|null);
}

/** Represents a CafeRegistration. */
export class CafeRegistration implements ICafeRegistration {

    /**
     * Constructs a new CafeRegistration.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeRegistration);

    /** CafeRegistration address. */
    public address: string;

    /** CafeRegistration value. */
    public value: string;

    /** CafeRegistration nonce. */
    public nonce: string;

    /** CafeRegistration sig. */
    public sig: Uint8Array;

    /** CafeRegistration token. */
    public token: string;

    /**
     * Creates a new CafeRegistration instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeRegistration instance
     */
    public static create(properties?: ICafeRegistration): CafeRegistration;

    /**
     * Encodes the specified CafeRegistration message. Does not implicitly {@link CafeRegistration.verify|verify} messages.
     * @param message CafeRegistration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeRegistration message, length delimited. Does not implicitly {@link CafeRegistration.verify|verify} messages.
     * @param message CafeRegistration message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeRegistration, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeRegistration message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeRegistration;

    /**
     * Decodes a CafeRegistration message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeRegistration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeRegistration;

    /**
     * Verifies a CafeRegistration message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeRegistration message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeRegistration
     */
    public static fromObject(object: { [k: string]: any }): CafeRegistration;

    /**
     * Creates a plain object from a CafeRegistration message. Also converts values to other types if specified.
     * @param message CafeRegistration
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeRegistration, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeRegistration to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeSession. */
export interface ICafeSession {

    /** CafeSession id */
    id?: (string|null);

    /** CafeSession access */
    access?: (string|null);

    /** CafeSession exp */
    exp?: (google.protobuf.ITimestamp|null);

    /** CafeSession refresh */
    refresh?: (string|null);

    /** CafeSession rexp */
    rexp?: (google.protobuf.ITimestamp|null);

    /** CafeSession subject */
    subject?: (string|null);

    /** CafeSession type */
    type?: (string|null);

    /** CafeSession cafe */
    cafe?: (ICafe|null);
}

/** Represents a CafeSession. */
export class CafeSession implements ICafeSession {

    /**
     * Constructs a new CafeSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeSession);

    /** CafeSession id. */
    public id: string;

    /** CafeSession access. */
    public access: string;

    /** CafeSession exp. */
    public exp?: (google.protobuf.ITimestamp|null);

    /** CafeSession refresh. */
    public refresh: string;

    /** CafeSession rexp. */
    public rexp?: (google.protobuf.ITimestamp|null);

    /** CafeSession subject. */
    public subject: string;

    /** CafeSession type. */
    public type: string;

    /** CafeSession cafe. */
    public cafe?: (ICafe|null);

    /**
     * Creates a new CafeSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeSession instance
     */
    public static create(properties?: ICafeSession): CafeSession;

    /**
     * Encodes the specified CafeSession message. Does not implicitly {@link CafeSession.verify|verify} messages.
     * @param message CafeSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeSession message, length delimited. Does not implicitly {@link CafeSession.verify|verify} messages.
     * @param message CafeSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeSession;

    /**
     * Decodes a CafeSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeSession;

    /**
     * Verifies a CafeSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeSession
     */
    public static fromObject(object: { [k: string]: any }): CafeSession;

    /**
     * Creates a plain object from a CafeSession message. Also converts values to other types if specified.
     * @param message CafeSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeSessions. */
export interface ICafeSessions {

    /** CafeSessions values */
    values?: (ICafeSession[]|null);
}

/** Represents a CafeSessions. */
export class CafeSessions implements ICafeSessions {

    /**
     * Constructs a new CafeSessions.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeSessions);

    /** CafeSessions values. */
    public values: ICafeSession[];

    /**
     * Creates a new CafeSessions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeSessions instance
     */
    public static create(properties?: ICafeSessions): CafeSessions;

    /**
     * Encodes the specified CafeSessions message. Does not implicitly {@link CafeSessions.verify|verify} messages.
     * @param message CafeSessions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeSessions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeSessions message, length delimited. Does not implicitly {@link CafeSessions.verify|verify} messages.
     * @param message CafeSessions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeSessions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeSessions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeSessions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeSessions;

    /**
     * Decodes a CafeSessions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeSessions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeSessions;

    /**
     * Verifies a CafeSessions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeSessions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeSessions
     */
    public static fromObject(object: { [k: string]: any }): CafeSessions;

    /**
     * Creates a plain object from a CafeSessions message. Also converts values to other types if specified.
     * @param message CafeSessions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeSessions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeSessions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeRefreshSession. */
export interface ICafeRefreshSession {

    /** CafeRefreshSession access */
    access?: (string|null);

    /** CafeRefreshSession refresh */
    refresh?: (string|null);
}

/** Represents a CafeRefreshSession. */
export class CafeRefreshSession implements ICafeRefreshSession {

    /**
     * Constructs a new CafeRefreshSession.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeRefreshSession);

    /** CafeRefreshSession access. */
    public access: string;

    /** CafeRefreshSession refresh. */
    public refresh: string;

    /**
     * Creates a new CafeRefreshSession instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeRefreshSession instance
     */
    public static create(properties?: ICafeRefreshSession): CafeRefreshSession;

    /**
     * Encodes the specified CafeRefreshSession message. Does not implicitly {@link CafeRefreshSession.verify|verify} messages.
     * @param message CafeRefreshSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeRefreshSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeRefreshSession message, length delimited. Does not implicitly {@link CafeRefreshSession.verify|verify} messages.
     * @param message CafeRefreshSession message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeRefreshSession, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeRefreshSession message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeRefreshSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeRefreshSession;

    /**
     * Decodes a CafeRefreshSession message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeRefreshSession
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeRefreshSession;

    /**
     * Verifies a CafeRefreshSession message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeRefreshSession message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeRefreshSession
     */
    public static fromObject(object: { [k: string]: any }): CafeRefreshSession;

    /**
     * Creates a plain object from a CafeRefreshSession message. Also converts values to other types if specified.
     * @param message CafeRefreshSession
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeRefreshSession, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeRefreshSession to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafePublishContact. */
export interface ICafePublishContact {

    /** CafePublishContact token */
    token?: (string|null);

    /** CafePublishContact contact */
    contact?: (IContact|null);
}

/** Represents a CafePublishContact. */
export class CafePublishContact implements ICafePublishContact {

    /**
     * Constructs a new CafePublishContact.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafePublishContact);

    /** CafePublishContact token. */
    public token: string;

    /** CafePublishContact contact. */
    public contact?: (IContact|null);

    /**
     * Creates a new CafePublishContact instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafePublishContact instance
     */
    public static create(properties?: ICafePublishContact): CafePublishContact;

    /**
     * Encodes the specified CafePublishContact message. Does not implicitly {@link CafePublishContact.verify|verify} messages.
     * @param message CafePublishContact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafePublishContact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafePublishContact message, length delimited. Does not implicitly {@link CafePublishContact.verify|verify} messages.
     * @param message CafePublishContact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafePublishContact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafePublishContact message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafePublishContact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafePublishContact;

    /**
     * Decodes a CafePublishContact message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafePublishContact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafePublishContact;

    /**
     * Verifies a CafePublishContact message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafePublishContact message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafePublishContact
     */
    public static fromObject(object: { [k: string]: any }): CafePublishContact;

    /**
     * Creates a plain object from a CafePublishContact message. Also converts values to other types if specified.
     * @param message CafePublishContact
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafePublishContact, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafePublishContact to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafePublishContactAck. */
export interface ICafePublishContactAck {

    /** CafePublishContactAck id */
    id?: (string|null);
}

/** Represents a CafePublishContactAck. */
export class CafePublishContactAck implements ICafePublishContactAck {

    /**
     * Constructs a new CafePublishContactAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafePublishContactAck);

    /** CafePublishContactAck id. */
    public id: string;

    /**
     * Creates a new CafePublishContactAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafePublishContactAck instance
     */
    public static create(properties?: ICafePublishContactAck): CafePublishContactAck;

    /**
     * Encodes the specified CafePublishContactAck message. Does not implicitly {@link CafePublishContactAck.verify|verify} messages.
     * @param message CafePublishContactAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafePublishContactAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafePublishContactAck message, length delimited. Does not implicitly {@link CafePublishContactAck.verify|verify} messages.
     * @param message CafePublishContactAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafePublishContactAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafePublishContactAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafePublishContactAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafePublishContactAck;

    /**
     * Decodes a CafePublishContactAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafePublishContactAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafePublishContactAck;

    /**
     * Verifies a CafePublishContactAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafePublishContactAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafePublishContactAck
     */
    public static fromObject(object: { [k: string]: any }): CafePublishContactAck;

    /**
     * Creates a plain object from a CafePublishContactAck message. Also converts values to other types if specified.
     * @param message CafePublishContactAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafePublishContactAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafePublishContactAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeContactQuery. */
export interface ICafeContactQuery {

    /** CafeContactQuery token */
    token?: (string|null);

    /** CafeContactQuery findId */
    findId?: (string|null);

    /** CafeContactQuery findAddress */
    findAddress?: (string|null);

    /** CafeContactQuery findUsername */
    findUsername?: (string|null);

    /** CafeContactQuery limit */
    limit?: (number|null);

    /** CafeContactQuery wait */
    wait?: (number|null);
}

/** Represents a CafeContactQuery. */
export class CafeContactQuery implements ICafeContactQuery {

    /**
     * Constructs a new CafeContactQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeContactQuery);

    /** CafeContactQuery token. */
    public token: string;

    /** CafeContactQuery findId. */
    public findId: string;

    /** CafeContactQuery findAddress. */
    public findAddress: string;

    /** CafeContactQuery findUsername. */
    public findUsername: string;

    /** CafeContactQuery limit. */
    public limit: number;

    /** CafeContactQuery wait. */
    public wait: number;

    /**
     * Creates a new CafeContactQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeContactQuery instance
     */
    public static create(properties?: ICafeContactQuery): CafeContactQuery;

    /**
     * Encodes the specified CafeContactQuery message. Does not implicitly {@link CafeContactQuery.verify|verify} messages.
     * @param message CafeContactQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeContactQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeContactQuery message, length delimited. Does not implicitly {@link CafeContactQuery.verify|verify} messages.
     * @param message CafeContactQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeContactQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeContactQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeContactQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeContactQuery;

    /**
     * Decodes a CafeContactQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeContactQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeContactQuery;

    /**
     * Verifies a CafeContactQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeContactQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeContactQuery
     */
    public static fromObject(object: { [k: string]: any }): CafeContactQuery;

    /**
     * Creates a plain object from a CafeContactQuery message. Also converts values to other types if specified.
     * @param message CafeContactQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeContactQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeContactQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeContactQueryResult. */
export interface ICafeContactQueryResult {

    /** CafeContactQueryResult contacts */
    contacts?: (IContact[]|null);
}

/** Represents a CafeContactQueryResult. */
export class CafeContactQueryResult implements ICafeContactQueryResult {

    /**
     * Constructs a new CafeContactQueryResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeContactQueryResult);

    /** CafeContactQueryResult contacts. */
    public contacts: IContact[];

    /**
     * Creates a new CafeContactQueryResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeContactQueryResult instance
     */
    public static create(properties?: ICafeContactQueryResult): CafeContactQueryResult;

    /**
     * Encodes the specified CafeContactQueryResult message. Does not implicitly {@link CafeContactQueryResult.verify|verify} messages.
     * @param message CafeContactQueryResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeContactQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeContactQueryResult message, length delimited. Does not implicitly {@link CafeContactQueryResult.verify|verify} messages.
     * @param message CafeContactQueryResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeContactQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeContactQueryResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeContactQueryResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeContactQueryResult;

    /**
     * Decodes a CafeContactQueryResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeContactQueryResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeContactQueryResult;

    /**
     * Verifies a CafeContactQueryResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeContactQueryResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeContactQueryResult
     */
    public static fromObject(object: { [k: string]: any }): CafeContactQueryResult;

    /**
     * Creates a plain object from a CafeContactQueryResult message. Also converts values to other types if specified.
     * @param message CafeContactQueryResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeContactQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeContactQueryResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeStore. */
export interface ICafeStore {

    /** CafeStore token */
    token?: (string|null);

    /** CafeStore cids */
    cids?: (string[]|null);
}

/** Represents a CafeStore. */
export class CafeStore implements ICafeStore {

    /**
     * Constructs a new CafeStore.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeStore);

    /** CafeStore token. */
    public token: string;

    /** CafeStore cids. */
    public cids: string[];

    /**
     * Creates a new CafeStore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeStore instance
     */
    public static create(properties?: ICafeStore): CafeStore;

    /**
     * Encodes the specified CafeStore message. Does not implicitly {@link CafeStore.verify|verify} messages.
     * @param message CafeStore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeStore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeStore message, length delimited. Does not implicitly {@link CafeStore.verify|verify} messages.
     * @param message CafeStore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeStore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeStore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeStore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeStore;

    /**
     * Decodes a CafeStore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeStore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeStore;

    /**
     * Verifies a CafeStore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeStore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeStore
     */
    public static fromObject(object: { [k: string]: any }): CafeStore;

    /**
     * Creates a plain object from a CafeStore message. Also converts values to other types if specified.
     * @param message CafeStore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeStore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeStore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeObjectList. */
export interface ICafeObjectList {

    /** CafeObjectList cids */
    cids?: (string[]|null);
}

/** Represents a CafeObjectList. */
export class CafeObjectList implements ICafeObjectList {

    /**
     * Constructs a new CafeObjectList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeObjectList);

    /** CafeObjectList cids. */
    public cids: string[];

    /**
     * Creates a new CafeObjectList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeObjectList instance
     */
    public static create(properties?: ICafeObjectList): CafeObjectList;

    /**
     * Encodes the specified CafeObjectList message. Does not implicitly {@link CafeObjectList.verify|verify} messages.
     * @param message CafeObjectList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeObjectList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeObjectList message, length delimited. Does not implicitly {@link CafeObjectList.verify|verify} messages.
     * @param message CafeObjectList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeObjectList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeObjectList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeObjectList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeObjectList;

    /**
     * Decodes a CafeObjectList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeObjectList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeObjectList;

    /**
     * Verifies a CafeObjectList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeObjectList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeObjectList
     */
    public static fromObject(object: { [k: string]: any }): CafeObjectList;

    /**
     * Creates a plain object from a CafeObjectList message. Also converts values to other types if specified.
     * @param message CafeObjectList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeObjectList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeObjectList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeObject. */
export interface ICafeObject {

    /** CafeObject token */
    token?: (string|null);

    /** CafeObject cid */
    cid?: (string|null);

    /** CafeObject data */
    data?: (Uint8Array|null);

    /** CafeObject node */
    node?: (Uint8Array|null);
}

/** Represents a CafeObject. */
export class CafeObject implements ICafeObject {

    /**
     * Constructs a new CafeObject.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeObject);

    /** CafeObject token. */
    public token: string;

    /** CafeObject cid. */
    public cid: string;

    /** CafeObject data. */
    public data: Uint8Array;

    /** CafeObject node. */
    public node: Uint8Array;

    /**
     * Creates a new CafeObject instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeObject instance
     */
    public static create(properties?: ICafeObject): CafeObject;

    /**
     * Encodes the specified CafeObject message. Does not implicitly {@link CafeObject.verify|verify} messages.
     * @param message CafeObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeObject message, length delimited. Does not implicitly {@link CafeObject.verify|verify} messages.
     * @param message CafeObject message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeObject, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeObject message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeObject;

    /**
     * Decodes a CafeObject message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeObject
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeObject;

    /**
     * Verifies a CafeObject message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeObject message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeObject
     */
    public static fromObject(object: { [k: string]: any }): CafeObject;

    /**
     * Creates a plain object from a CafeObject message. Also converts values to other types if specified.
     * @param message CafeObject
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeObject to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeStoreThread. */
export interface ICafeStoreThread {

    /** CafeStoreThread token */
    token?: (string|null);

    /** CafeStoreThread id */
    id?: (string|null);

    /** CafeStoreThread ciphertext */
    ciphertext?: (Uint8Array|null);
}

/** Represents a CafeStoreThread. */
export class CafeStoreThread implements ICafeStoreThread {

    /**
     * Constructs a new CafeStoreThread.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeStoreThread);

    /** CafeStoreThread token. */
    public token: string;

    /** CafeStoreThread id. */
    public id: string;

    /** CafeStoreThread ciphertext. */
    public ciphertext: Uint8Array;

    /**
     * Creates a new CafeStoreThread instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeStoreThread instance
     */
    public static create(properties?: ICafeStoreThread): CafeStoreThread;

    /**
     * Encodes the specified CafeStoreThread message. Does not implicitly {@link CafeStoreThread.verify|verify} messages.
     * @param message CafeStoreThread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeStoreThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeStoreThread message, length delimited. Does not implicitly {@link CafeStoreThread.verify|verify} messages.
     * @param message CafeStoreThread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeStoreThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeStoreThread message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeStoreThread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeStoreThread;

    /**
     * Decodes a CafeStoreThread message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeStoreThread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeStoreThread;

    /**
     * Verifies a CafeStoreThread message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeStoreThread message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeStoreThread
     */
    public static fromObject(object: { [k: string]: any }): CafeStoreThread;

    /**
     * Creates a plain object from a CafeStoreThread message. Also converts values to other types if specified.
     * @param message CafeStoreThread
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeStoreThread, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeStoreThread to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeThread. */
export interface ICafeThread {

    /** CafeThread key */
    key?: (string|null);

    /** CafeThread sk */
    sk?: (Uint8Array|null);

    /** CafeThread name */
    name?: (string|null);

    /** CafeThread schema */
    schema?: (string|null);

    /** CafeThread initiator */
    initiator?: (string|null);

    /** CafeThread type */
    type?: (CafeThread.Type|null);

    /** CafeThread state */
    state?: (CafeThread.State|null);

    /** CafeThread head */
    head?: (string|null);

    /** CafeThread sharing */
    sharing?: (CafeThread.Sharing|null);

    /** CafeThread members */
    members?: (string[]|null);
}

/** Represents a CafeThread. */
export class CafeThread implements ICafeThread {

    /**
     * Constructs a new CafeThread.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeThread);

    /** CafeThread key. */
    public key: string;

    /** CafeThread sk. */
    public sk: Uint8Array;

    /** CafeThread name. */
    public name: string;

    /** CafeThread schema. */
    public schema: string;

    /** CafeThread initiator. */
    public initiator: string;

    /** CafeThread type. */
    public type: CafeThread.Type;

    /** CafeThread state. */
    public state: CafeThread.State;

    /** CafeThread head. */
    public head: string;

    /** CafeThread sharing. */
    public sharing: CafeThread.Sharing;

    /** CafeThread members. */
    public members: string[];

    /**
     * Creates a new CafeThread instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeThread instance
     */
    public static create(properties?: ICafeThread): CafeThread;

    /**
     * Encodes the specified CafeThread message. Does not implicitly {@link CafeThread.verify|verify} messages.
     * @param message CafeThread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeThread message, length delimited. Does not implicitly {@link CafeThread.verify|verify} messages.
     * @param message CafeThread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeThread message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeThread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeThread;

    /**
     * Decodes a CafeThread message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeThread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeThread;

    /**
     * Verifies a CafeThread message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeThread message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeThread
     */
    public static fromObject(object: { [k: string]: any }): CafeThread;

    /**
     * Creates a plain object from a CafeThread message. Also converts values to other types if specified.
     * @param message CafeThread
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeThread, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeThread to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CafeThread {

    /** Type enum. */
    enum Type {
        Private = 0,
        ReadOnly = 1,
        Public = 2,
        Open = 3
    }

    /** Sharing enum. */
    enum Sharing {
        NotShared = 0,
        InviteOnly = 1,
        Shared = 2
    }

    /** State enum. */
    enum State {
        LoadingBehind = 0,
        Loaded = 1,
        LoadingAhead = 2
    }
}

/** Properties of a CafeClientThread. */
export interface ICafeClientThread {

    /** CafeClientThread id */
    id?: (string|null);

    /** CafeClientThread clientId */
    clientId?: (string|null);

    /** CafeClientThread ciphertext */
    ciphertext?: (Uint8Array|null);
}

/** Represents a CafeClientThread. */
export class CafeClientThread implements ICafeClientThread {

    /**
     * Constructs a new CafeClientThread.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeClientThread);

    /** CafeClientThread id. */
    public id: string;

    /** CafeClientThread clientId. */
    public clientId: string;

    /** CafeClientThread ciphertext. */
    public ciphertext: Uint8Array;

    /**
     * Creates a new CafeClientThread instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeClientThread instance
     */
    public static create(properties?: ICafeClientThread): CafeClientThread;

    /**
     * Encodes the specified CafeClientThread message. Does not implicitly {@link CafeClientThread.verify|verify} messages.
     * @param message CafeClientThread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeClientThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeClientThread message, length delimited. Does not implicitly {@link CafeClientThread.verify|verify} messages.
     * @param message CafeClientThread message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeClientThread, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeClientThread message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeClientThread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeClientThread;

    /**
     * Decodes a CafeClientThread message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeClientThread
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeClientThread;

    /**
     * Verifies a CafeClientThread message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeClientThread message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeClientThread
     */
    public static fromObject(object: { [k: string]: any }): CafeClientThread;

    /**
     * Creates a plain object from a CafeClientThread message. Also converts values to other types if specified.
     * @param message CafeClientThread
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeClientThread, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeClientThread to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeStored. */
export interface ICafeStored {

    /** CafeStored id */
    id?: (string|null);
}

/** Represents a CafeStored. */
export class CafeStored implements ICafeStored {

    /**
     * Constructs a new CafeStored.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeStored);

    /** CafeStored id. */
    public id: string;

    /**
     * Creates a new CafeStored instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeStored instance
     */
    public static create(properties?: ICafeStored): CafeStored;

    /**
     * Encodes the specified CafeStored message. Does not implicitly {@link CafeStored.verify|verify} messages.
     * @param message CafeStored message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeStored, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeStored message, length delimited. Does not implicitly {@link CafeStored.verify|verify} messages.
     * @param message CafeStored message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeStored, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeStored message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeStored
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeStored;

    /**
     * Decodes a CafeStored message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeStored
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeStored;

    /**
     * Verifies a CafeStored message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeStored message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeStored
     */
    public static fromObject(object: { [k: string]: any }): CafeStored;

    /**
     * Creates a plain object from a CafeStored message. Also converts values to other types if specified.
     * @param message CafeStored
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeStored, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeStored to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeDeliverMessage. */
export interface ICafeDeliverMessage {

    /** CafeDeliverMessage id */
    id?: (string|null);

    /** CafeDeliverMessage clientId */
    clientId?: (string|null);
}

/** Represents a CafeDeliverMessage. */
export class CafeDeliverMessage implements ICafeDeliverMessage {

    /**
     * Constructs a new CafeDeliverMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeDeliverMessage);

    /** CafeDeliverMessage id. */
    public id: string;

    /** CafeDeliverMessage clientId. */
    public clientId: string;

    /**
     * Creates a new CafeDeliverMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeDeliverMessage instance
     */
    public static create(properties?: ICafeDeliverMessage): CafeDeliverMessage;

    /**
     * Encodes the specified CafeDeliverMessage message. Does not implicitly {@link CafeDeliverMessage.verify|verify} messages.
     * @param message CafeDeliverMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeDeliverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeDeliverMessage message, length delimited. Does not implicitly {@link CafeDeliverMessage.verify|verify} messages.
     * @param message CafeDeliverMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeDeliverMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeDeliverMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeDeliverMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeDeliverMessage;

    /**
     * Decodes a CafeDeliverMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeDeliverMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeDeliverMessage;

    /**
     * Verifies a CafeDeliverMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeDeliverMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeDeliverMessage
     */
    public static fromObject(object: { [k: string]: any }): CafeDeliverMessage;

    /**
     * Creates a plain object from a CafeDeliverMessage message. Also converts values to other types if specified.
     * @param message CafeDeliverMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeDeliverMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeDeliverMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeCheckMessages. */
export interface ICafeCheckMessages {

    /** CafeCheckMessages token */
    token?: (string|null);
}

/** Represents a CafeCheckMessages. */
export class CafeCheckMessages implements ICafeCheckMessages {

    /**
     * Constructs a new CafeCheckMessages.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeCheckMessages);

    /** CafeCheckMessages token. */
    public token: string;

    /**
     * Creates a new CafeCheckMessages instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeCheckMessages instance
     */
    public static create(properties?: ICafeCheckMessages): CafeCheckMessages;

    /**
     * Encodes the specified CafeCheckMessages message. Does not implicitly {@link CafeCheckMessages.verify|verify} messages.
     * @param message CafeCheckMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeCheckMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeCheckMessages message, length delimited. Does not implicitly {@link CafeCheckMessages.verify|verify} messages.
     * @param message CafeCheckMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeCheckMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeCheckMessages message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeCheckMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeCheckMessages;

    /**
     * Decodes a CafeCheckMessages message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeCheckMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeCheckMessages;

    /**
     * Verifies a CafeCheckMessages message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeCheckMessages message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeCheckMessages
     */
    public static fromObject(object: { [k: string]: any }): CafeCheckMessages;

    /**
     * Creates a plain object from a CafeCheckMessages message. Also converts values to other types if specified.
     * @param message CafeCheckMessages
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeCheckMessages, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeCheckMessages to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeMessage. */
export interface ICafeMessage {

    /** CafeMessage id */
    id?: (string|null);

    /** CafeMessage peerId */
    peerId?: (string|null);

    /** CafeMessage date */
    date?: (google.protobuf.ITimestamp|null);
}

/** Represents a CafeMessage. */
export class CafeMessage implements ICafeMessage {

    /**
     * Constructs a new CafeMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeMessage);

    /** CafeMessage id. */
    public id: string;

    /** CafeMessage peerId. */
    public peerId: string;

    /** CafeMessage date. */
    public date?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new CafeMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeMessage instance
     */
    public static create(properties?: ICafeMessage): CafeMessage;

    /**
     * Encodes the specified CafeMessage message. Does not implicitly {@link CafeMessage.verify|verify} messages.
     * @param message CafeMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeMessage message, length delimited. Does not implicitly {@link CafeMessage.verify|verify} messages.
     * @param message CafeMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeMessage;

    /**
     * Decodes a CafeMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeMessage;

    /**
     * Verifies a CafeMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeMessage
     */
    public static fromObject(object: { [k: string]: any }): CafeMessage;

    /**
     * Creates a plain object from a CafeMessage message. Also converts values to other types if specified.
     * @param message CafeMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeMessages. */
export interface ICafeMessages {

    /** CafeMessages messages */
    messages?: (ICafeMessage[]|null);
}

/** Represents a CafeMessages. */
export class CafeMessages implements ICafeMessages {

    /**
     * Constructs a new CafeMessages.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeMessages);

    /** CafeMessages messages. */
    public messages: ICafeMessage[];

    /**
     * Creates a new CafeMessages instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeMessages instance
     */
    public static create(properties?: ICafeMessages): CafeMessages;

    /**
     * Encodes the specified CafeMessages message. Does not implicitly {@link CafeMessages.verify|verify} messages.
     * @param message CafeMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeMessages message, length delimited. Does not implicitly {@link CafeMessages.verify|verify} messages.
     * @param message CafeMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeMessages message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeMessages;

    /**
     * Decodes a CafeMessages message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeMessages;

    /**
     * Verifies a CafeMessages message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeMessages message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeMessages
     */
    public static fromObject(object: { [k: string]: any }): CafeMessages;

    /**
     * Creates a plain object from a CafeMessages message. Also converts values to other types if specified.
     * @param message CafeMessages
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeMessages, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeMessages to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeDeleteMessages. */
export interface ICafeDeleteMessages {

    /** CafeDeleteMessages token */
    token?: (string|null);
}

/** Represents a CafeDeleteMessages. */
export class CafeDeleteMessages implements ICafeDeleteMessages {

    /**
     * Constructs a new CafeDeleteMessages.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeDeleteMessages);

    /** CafeDeleteMessages token. */
    public token: string;

    /**
     * Creates a new CafeDeleteMessages instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeDeleteMessages instance
     */
    public static create(properties?: ICafeDeleteMessages): CafeDeleteMessages;

    /**
     * Encodes the specified CafeDeleteMessages message. Does not implicitly {@link CafeDeleteMessages.verify|verify} messages.
     * @param message CafeDeleteMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeDeleteMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeDeleteMessages message, length delimited. Does not implicitly {@link CafeDeleteMessages.verify|verify} messages.
     * @param message CafeDeleteMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeDeleteMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeDeleteMessages message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeDeleteMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeDeleteMessages;

    /**
     * Decodes a CafeDeleteMessages message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeDeleteMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeDeleteMessages;

    /**
     * Verifies a CafeDeleteMessages message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeDeleteMessages message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeDeleteMessages
     */
    public static fromObject(object: { [k: string]: any }): CafeDeleteMessages;

    /**
     * Creates a plain object from a CafeDeleteMessages message. Also converts values to other types if specified.
     * @param message CafeDeleteMessages
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeDeleteMessages, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeDeleteMessages to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafeDeleteMessagesAck. */
export interface ICafeDeleteMessagesAck {

    /** CafeDeleteMessagesAck more */
    more?: (boolean|null);
}

/** Represents a CafeDeleteMessagesAck. */
export class CafeDeleteMessagesAck implements ICafeDeleteMessagesAck {

    /**
     * Constructs a new CafeDeleteMessagesAck.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafeDeleteMessagesAck);

    /** CafeDeleteMessagesAck more. */
    public more: boolean;

    /**
     * Creates a new CafeDeleteMessagesAck instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafeDeleteMessagesAck instance
     */
    public static create(properties?: ICafeDeleteMessagesAck): CafeDeleteMessagesAck;

    /**
     * Encodes the specified CafeDeleteMessagesAck message. Does not implicitly {@link CafeDeleteMessagesAck.verify|verify} messages.
     * @param message CafeDeleteMessagesAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafeDeleteMessagesAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafeDeleteMessagesAck message, length delimited. Does not implicitly {@link CafeDeleteMessagesAck.verify|verify} messages.
     * @param message CafeDeleteMessagesAck message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafeDeleteMessagesAck, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafeDeleteMessagesAck message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafeDeleteMessagesAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafeDeleteMessagesAck;

    /**
     * Decodes a CafeDeleteMessagesAck message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafeDeleteMessagesAck
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafeDeleteMessagesAck;

    /**
     * Verifies a CafeDeleteMessagesAck message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafeDeleteMessagesAck message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafeDeleteMessagesAck
     */
    public static fromObject(object: { [k: string]: any }): CafeDeleteMessagesAck;

    /**
     * Creates a plain object from a CafeDeleteMessagesAck message. Also converts values to other types if specified.
     * @param message CafeDeleteMessagesAck
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafeDeleteMessagesAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafeDeleteMessagesAck to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Contact. */
export interface IContact {

    /** Contact id */
    id?: (string|null);

    /** Contact address */
    address?: (string|null);

    /** Contact username */
    username?: (string|null);

    /** Contact avatar */
    avatar?: (string|null);

    /** Contact inboxes */
    inboxes?: (ICafe[]|null);

    /** Contact created */
    created?: (google.protobuf.ITimestamp|null);

    /** Contact updated */
    updated?: (google.protobuf.ITimestamp|null);
}

/** Represents a Contact. */
export class Contact implements IContact {

    /**
     * Constructs a new Contact.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContact);

    /** Contact id. */
    public id: string;

    /** Contact address. */
    public address: string;

    /** Contact username. */
    public username: string;

    /** Contact avatar. */
    public avatar: string;

    /** Contact inboxes. */
    public inboxes: ICafe[];

    /** Contact created. */
    public created?: (google.protobuf.ITimestamp|null);

    /** Contact updated. */
    public updated?: (google.protobuf.ITimestamp|null);

    /**
     * Creates a new Contact instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Contact instance
     */
    public static create(properties?: IContact): Contact;

    /**
     * Encodes the specified Contact message. Does not implicitly {@link Contact.verify|verify} messages.
     * @param message Contact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Contact message, length delimited. Does not implicitly {@link Contact.verify|verify} messages.
     * @param message Contact message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContact, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Contact message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Contact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Contact;

    /**
     * Decodes a Contact message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Contact
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Contact;

    /**
     * Verifies a Contact message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Contact message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Contact
     */
    public static fromObject(object: { [k: string]: any }): Contact;

    /**
     * Creates a plain object from a Contact message. Also converts values to other types if specified.
     * @param message Contact
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Contact to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FileIndex. */
export interface IFileIndex {

    /** FileIndex mill */
    mill?: (string|null);

    /** FileIndex checksum */
    checksum?: (string|null);

    /** FileIndex source */
    source?: (string|null);

    /** FileIndex opts */
    opts?: (string|null);

    /** FileIndex hash */
    hash?: (string|null);

    /** FileIndex key */
    key?: (string|null);

    /** FileIndex media */
    media?: (string|null);

    /** FileIndex name */
    name?: (string|null);

    /** FileIndex size */
    size?: (number|Long|null);

    /** FileIndex added */
    added?: (google.protobuf.ITimestamp|null);

    /** FileIndex meta */
    meta?: (google.protobuf.IStruct|null);

    /** FileIndex targets */
    targets?: (string[]|null);
}

/** Represents a FileIndex. */
export class FileIndex implements IFileIndex {

    /**
     * Constructs a new FileIndex.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFileIndex);

    /** FileIndex mill. */
    public mill: string;

    /** FileIndex checksum. */
    public checksum: string;

    /** FileIndex source. */
    public source: string;

    /** FileIndex opts. */
    public opts: string;

    /** FileIndex hash. */
    public hash: string;

    /** FileIndex key. */
    public key: string;

    /** FileIndex media. */
    public media: string;

    /** FileIndex name. */
    public name: string;

    /** FileIndex size. */
    public size: (number|Long);

    /** FileIndex added. */
    public added?: (google.protobuf.ITimestamp|null);

    /** FileIndex meta. */
    public meta?: (google.protobuf.IStruct|null);

    /** FileIndex targets. */
    public targets: string[];

    /**
     * Creates a new FileIndex instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FileIndex instance
     */
    public static create(properties?: IFileIndex): FileIndex;

    /**
     * Encodes the specified FileIndex message. Does not implicitly {@link FileIndex.verify|verify} messages.
     * @param message FileIndex message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFileIndex, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FileIndex message, length delimited. Does not implicitly {@link FileIndex.verify|verify} messages.
     * @param message FileIndex message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFileIndex, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FileIndex message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FileIndex
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FileIndex;

    /**
     * Decodes a FileIndex message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FileIndex
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FileIndex;

    /**
     * Verifies a FileIndex message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FileIndex message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FileIndex
     */
    public static fromObject(object: { [k: string]: any }): FileIndex;

    /**
     * Creates a plain object from a FileIndex message. Also converts values to other types if specified.
     * @param message FileIndex
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FileIndex, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FileIndex to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Cafe. */
export interface ICafe {

    /** Cafe peer */
    peer?: (string|null);

    /** Cafe address */
    address?: (string|null);

    /** Cafe api */
    api?: (string|null);

    /** Cafe protocol */
    protocol?: (string|null);

    /** Cafe node */
    node?: (string|null);

    /** Cafe url */
    url?: (string|null);

    /** Cafe swarm */
    swarm?: (string[]|null);
}

/** Represents a Cafe. */
export class Cafe implements ICafe {

    /**
     * Constructs a new Cafe.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafe);

    /** Cafe peer. */
    public peer: string;

    /** Cafe address. */
    public address: string;

    /** Cafe api. */
    public api: string;

    /** Cafe protocol. */
    public protocol: string;

    /** Cafe node. */
    public node: string;

    /** Cafe url. */
    public url: string;

    /** Cafe swarm. */
    public swarm: string[];

    /**
     * Creates a new Cafe instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Cafe instance
     */
    public static create(properties?: ICafe): Cafe;

    /**
     * Encodes the specified Cafe message. Does not implicitly {@link Cafe.verify|verify} messages.
     * @param message Cafe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Cafe message, length delimited. Does not implicitly {@link Cafe.verify|verify} messages.
     * @param message Cafe message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafe, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Cafe message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Cafe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Cafe;

    /**
     * Decodes a Cafe message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Cafe
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Cafe;

    /**
     * Verifies a Cafe message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Cafe message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Cafe
     */
    public static fromObject(object: { [k: string]: any }): Cafe;

    /**
     * Creates a plain object from a Cafe message. Also converts values to other types if specified.
     * @param message Cafe
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Cafe, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Cafe to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CafePubSubContactQuery. */
export interface ICafePubSubContactQuery {

    /** CafePubSubContactQuery id */
    id?: (string|null);

    /** CafePubSubContactQuery findId */
    findId?: (string|null);

    /** CafePubSubContactQuery findAddress */
    findAddress?: (string|null);

    /** CafePubSubContactQuery findUsername */
    findUsername?: (string|null);

    /** CafePubSubContactQuery responseType */
    responseType?: (CafePubSubContactQuery.ResponseType|null);
}

/** Represents a CafePubSubContactQuery. */
export class CafePubSubContactQuery implements ICafePubSubContactQuery {

    /**
     * Constructs a new CafePubSubContactQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafePubSubContactQuery);

    /** CafePubSubContactQuery id. */
    public id: string;

    /** CafePubSubContactQuery findId. */
    public findId: string;

    /** CafePubSubContactQuery findAddress. */
    public findAddress: string;

    /** CafePubSubContactQuery findUsername. */
    public findUsername: string;

    /** CafePubSubContactQuery responseType. */
    public responseType: CafePubSubContactQuery.ResponseType;

    /**
     * Creates a new CafePubSubContactQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafePubSubContactQuery instance
     */
    public static create(properties?: ICafePubSubContactQuery): CafePubSubContactQuery;

    /**
     * Encodes the specified CafePubSubContactQuery message. Does not implicitly {@link CafePubSubContactQuery.verify|verify} messages.
     * @param message CafePubSubContactQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafePubSubContactQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafePubSubContactQuery message, length delimited. Does not implicitly {@link CafePubSubContactQuery.verify|verify} messages.
     * @param message CafePubSubContactQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafePubSubContactQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafePubSubContactQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafePubSubContactQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafePubSubContactQuery;

    /**
     * Decodes a CafePubSubContactQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafePubSubContactQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafePubSubContactQuery;

    /**
     * Verifies a CafePubSubContactQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafePubSubContactQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafePubSubContactQuery
     */
    public static fromObject(object: { [k: string]: any }): CafePubSubContactQuery;

    /**
     * Creates a plain object from a CafePubSubContactQuery message. Also converts values to other types if specified.
     * @param message CafePubSubContactQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafePubSubContactQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafePubSubContactQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CafePubSubContactQuery {

    /** ResponseType enum. */
    enum ResponseType {
        P2P = 0,
        PUBSUB = 1
    }
}

/** Properties of a CafePubSubContactQueryResult. */
export interface ICafePubSubContactQueryResult {

    /** CafePubSubContactQueryResult id */
    id?: (string|null);

    /** CafePubSubContactQueryResult contacts */
    contacts?: (IContact[]|null);
}

/** Represents a CafePubSubContactQueryResult. */
export class CafePubSubContactQueryResult implements ICafePubSubContactQueryResult {

    /**
     * Constructs a new CafePubSubContactQueryResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICafePubSubContactQueryResult);

    /** CafePubSubContactQueryResult id. */
    public id: string;

    /** CafePubSubContactQueryResult contacts. */
    public contacts: IContact[];

    /**
     * Creates a new CafePubSubContactQueryResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CafePubSubContactQueryResult instance
     */
    public static create(properties?: ICafePubSubContactQueryResult): CafePubSubContactQueryResult;

    /**
     * Encodes the specified CafePubSubContactQueryResult message. Does not implicitly {@link CafePubSubContactQueryResult.verify|verify} messages.
     * @param message CafePubSubContactQueryResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICafePubSubContactQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CafePubSubContactQueryResult message, length delimited. Does not implicitly {@link CafePubSubContactQueryResult.verify|verify} messages.
     * @param message CafePubSubContactQueryResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICafePubSubContactQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CafePubSubContactQueryResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CafePubSubContactQueryResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CafePubSubContactQueryResult;

    /**
     * Decodes a CafePubSubContactQueryResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CafePubSubContactQueryResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CafePubSubContactQueryResult;

    /**
     * Verifies a CafePubSubContactQueryResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CafePubSubContactQueryResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CafePubSubContactQueryResult
     */
    public static fromObject(object: { [k: string]: any }): CafePubSubContactQueryResult;

    /**
     * Creates a plain object from a CafePubSubContactQueryResult message. Also converts values to other types if specified.
     * @param message CafePubSubContactQueryResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CafePubSubContactQueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CafePubSubContactQueryResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Message. */
export interface IMessage {

    /** Message type */
    type?: (Message.Type|null);

    /** Message payload */
    payload?: (google.protobuf.IAny|null);

    /** Message requestId */
    requestId?: (number|null);

    /** Message isResponse */
    isResponse?: (boolean|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message type. */
    public type: Message.Type;

    /** Message payload. */
    public payload?: (google.protobuf.IAny|null);

    /** Message requestId. */
    public requestId: number;

    /** Message isResponse. */
    public isResponse: boolean;

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Message {

    /** Type enum. */
    enum Type {
        PING = 0,
        PONG = 1,
        THREAD_ENVELOPE = 10,
        CAFE_CHALLENGE = 50,
        CAFE_NONCE = 51,
        CAFE_REGISTRATION = 52,
        CAFE_SESSION = 53,
        CAFE_REFRESH_SESSION = 54,
        CAFE_STORE = 55,
        CAFE_OBJECT = 56,
        CAFE_OBJECT_LIST = 57,
        CAFE_STORE_THREAD = 58,
        CAFE_STORED = 59,
        CAFE_DELIVER_MESSAGE = 60,
        CAFE_CHECK_MESSAGES = 61,
        CAFE_MESSAGES = 62,
        CAFE_DELETE_MESSAGES = 63,
        CAFE_DELETE_MESSAGES_ACK = 64,
        CAFE_YOU_HAVE_MAIL = 65,
        CAFE_PUBLISH_CONTACT = 66,
        CAFE_PUBLISH_CONTACT_ACK = 67,
        CAFE_QUERY = 70,
        CAFE_QUERY_RES = 71,
        CAFE_PUBSUB_QUERY = 102,
        CAFE_PUBSUB_QUERY_RES = 103,
        ERROR = 500,
        CAFE_CONTACT_QUERY = 68,
        CAFE_CONTACT_QUERY_RES = 69,
        CAFE_PUBSUB_CONTACT_QUERY = 100,
        CAFE_PUBSUB_CONTACT_QUERY_RES = 101
    }
}

/** Properties of an Envelope. */
export interface IEnvelope {

    /** Envelope message */
    message?: (IMessage|null);

    /** Envelope sig */
    sig?: (Uint8Array|null);
}

/** Represents an Envelope. */
export class Envelope implements IEnvelope {

    /**
     * Constructs a new Envelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvelope);

    /** Envelope message. */
    public message?: (IMessage|null);

    /** Envelope sig. */
    public sig: Uint8Array;

    /**
     * Creates a new Envelope instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Envelope instance
     */
    public static create(properties?: IEnvelope): Envelope;

    /**
     * Encodes the specified Envelope message. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Envelope message, length delimited. Does not implicitly {@link Envelope.verify|verify} messages.
     * @param message Envelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Envelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Envelope;

    /**
     * Decodes an Envelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Envelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Envelope;

    /**
     * Verifies an Envelope message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Envelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Envelope
     */
    public static fromObject(object: { [k: string]: any }): Envelope;

    /**
     * Creates a plain object from an Envelope message. Also converts values to other types if specified.
     * @param message Envelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Envelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Envelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Error. */
export interface IError {

    /** Error code */
    code?: (number|null);

    /** Error message */
    message?: (string|null);
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error code. */
    public code: number;

    /** Error message. */
    public message: string;

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Properties of a MobilePreparedFiles. */
export interface IMobilePreparedFiles {

    /** MobilePreparedFiles dir */
    dir?: (IDirectory|null);

    /** MobilePreparedFiles pin */
    pin?: ({ [k: string]: string }|null);
}

/** Represents a MobilePreparedFiles. */
export class MobilePreparedFiles implements IMobilePreparedFiles {

    /**
     * Constructs a new MobilePreparedFiles.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMobilePreparedFiles);

    /** MobilePreparedFiles dir. */
    public dir?: (IDirectory|null);

    /** MobilePreparedFiles pin. */
    public pin: { [k: string]: string };

    /**
     * Creates a new MobilePreparedFiles instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MobilePreparedFiles instance
     */
    public static create(properties?: IMobilePreparedFiles): MobilePreparedFiles;

    /**
     * Encodes the specified MobilePreparedFiles message. Does not implicitly {@link MobilePreparedFiles.verify|verify} messages.
     * @param message MobilePreparedFiles message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMobilePreparedFiles, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MobilePreparedFiles message, length delimited. Does not implicitly {@link MobilePreparedFiles.verify|verify} messages.
     * @param message MobilePreparedFiles message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMobilePreparedFiles, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MobilePreparedFiles message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MobilePreparedFiles
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MobilePreparedFiles;

    /**
     * Decodes a MobilePreparedFiles message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MobilePreparedFiles
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MobilePreparedFiles;

    /**
     * Verifies a MobilePreparedFiles message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MobilePreparedFiles message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MobilePreparedFiles
     */
    public static fromObject(object: { [k: string]: any }): MobilePreparedFiles;

    /**
     * Creates a plain object from a MobilePreparedFiles message. Also converts values to other types if specified.
     * @param message MobilePreparedFiles
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MobilePreparedFiles, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MobilePreparedFiles to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Directory. */
export interface IDirectory {

    /** Directory files */
    files?: ({ [k: string]: IFileIndex }|null);
}

/** Represents a Directory. */
export class Directory implements IDirectory {

    /**
     * Constructs a new Directory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDirectory);

    /** Directory files. */
    public files: { [k: string]: IFileIndex };

    /**
     * Creates a new Directory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Directory instance
     */
    public static create(properties?: IDirectory): Directory;

    /**
     * Encodes the specified Directory message. Does not implicitly {@link Directory.verify|verify} messages.
     * @param message Directory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Directory message, length delimited. Does not implicitly {@link Directory.verify|verify} messages.
     * @param message Directory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDirectory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Directory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Directory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Directory;

    /**
     * Decodes a Directory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Directory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Directory;

    /**
     * Verifies a Directory message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Directory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Directory
     */
    public static fromObject(object: { [k: string]: any }): Directory;

    /**
     * Creates a plain object from a Directory message. Also converts values to other types if specified.
     * @param message Directory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Directory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Directory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** FeedMode enum. */
export enum FeedMode {
    CHRONO = 0,
    ANNOTATED = 1,
    STACKS = 2
}

/** Properties of a FeedItem. */
export interface IFeedItem {

    /** FeedItem block */
    block?: (string|null);

    /** FeedItem thread */
    thread?: (string|null);

    /** FeedItem payload */
    payload?: (google.protobuf.IAny|null);
}

/** Represents a FeedItem. */
export class FeedItem implements IFeedItem {

    /**
     * Constructs a new FeedItem.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFeedItem);

    /** FeedItem block. */
    public block: string;

    /** FeedItem thread. */
    public thread: string;

    /** FeedItem payload. */
    public payload?: (google.protobuf.IAny|null);

    /**
     * Creates a new FeedItem instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FeedItem instance
     */
    public static create(properties?: IFeedItem): FeedItem;

    /**
     * Encodes the specified FeedItem message. Does not implicitly {@link FeedItem.verify|verify} messages.
     * @param message FeedItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFeedItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FeedItem message, length delimited. Does not implicitly {@link FeedItem.verify|verify} messages.
     * @param message FeedItem message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFeedItem, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FeedItem message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FeedItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FeedItem;

    /**
     * Decodes a FeedItem message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FeedItem
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FeedItem;

    /**
     * Verifies a FeedItem message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FeedItem message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FeedItem
     */
    public static fromObject(object: { [k: string]: any }): FeedItem;

    /**
     * Creates a plain object from a FeedItem message. Also converts values to other types if specified.
     * @param message FeedItem
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FeedItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FeedItem to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FeedItemList. */
export interface IFeedItemList {

    /** FeedItemList items */
    items?: (IFeedItem[]|null);

    /** FeedItemList count */
    count?: (number|null);

    /** FeedItemList next */
    next?: (string|null);
}

/** Represents a FeedItemList. */
export class FeedItemList implements IFeedItemList {

    /**
     * Constructs a new FeedItemList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFeedItemList);

    /** FeedItemList items. */
    public items: IFeedItem[];

    /** FeedItemList count. */
    public count: number;

    /** FeedItemList next. */
    public next: string;

    /**
     * Creates a new FeedItemList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FeedItemList instance
     */
    public static create(properties?: IFeedItemList): FeedItemList;

    /**
     * Encodes the specified FeedItemList message. Does not implicitly {@link FeedItemList.verify|verify} messages.
     * @param message FeedItemList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFeedItemList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FeedItemList message, length delimited. Does not implicitly {@link FeedItemList.verify|verify} messages.
     * @param message FeedItemList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFeedItemList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FeedItemList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FeedItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FeedItemList;

    /**
     * Decodes a FeedItemList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FeedItemList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FeedItemList;

    /**
     * Verifies a FeedItemList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FeedItemList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FeedItemList
     */
    public static fromObject(object: { [k: string]: any }): FeedItemList;

    /**
     * Creates a plain object from a FeedItemList message. Also converts values to other types if specified.
     * @param message FeedItemList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FeedItemList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FeedItemList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Join. */
export interface IJoin {

    /** Join block */
    block?: (string|null);

    /** Join date */
    date?: (google.protobuf.ITimestamp|null);

    /** Join author */
    author?: (string|null);

    /** Join username */
    username?: (string|null);

    /** Join avatar */
    avatar?: (string|null);

    /** Join likes */
    likes?: (ILike[]|null);
}

/** Represents a Join. */
export class Join implements IJoin {

    /**
     * Constructs a new Join.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoin);

    /** Join block. */
    public block: string;

    /** Join date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** Join author. */
    public author: string;

    /** Join username. */
    public username: string;

    /** Join avatar. */
    public avatar: string;

    /** Join likes. */
    public likes: ILike[];

    /**
     * Creates a new Join instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Join instance
     */
    public static create(properties?: IJoin): Join;

    /**
     * Encodes the specified Join message. Does not implicitly {@link Join.verify|verify} messages.
     * @param message Join message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Join message, length delimited. Does not implicitly {@link Join.verify|verify} messages.
     * @param message Join message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Join message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Join
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Join;

    /**
     * Decodes a Join message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Join
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Join;

    /**
     * Verifies a Join message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Join message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Join
     */
    public static fromObject(object: { [k: string]: any }): Join;

    /**
     * Creates a plain object from a Join message. Also converts values to other types if specified.
     * @param message Join
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Join, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Join to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a JoinList. */
export interface IJoinList {

    /** JoinList items */
    items?: (IJoin[]|null);
}

/** Represents a JoinList. */
export class JoinList implements IJoinList {

    /**
     * Constructs a new JoinList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IJoinList);

    /** JoinList items. */
    public items: IJoin[];

    /**
     * Creates a new JoinList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns JoinList instance
     */
    public static create(properties?: IJoinList): JoinList;

    /**
     * Encodes the specified JoinList message. Does not implicitly {@link JoinList.verify|verify} messages.
     * @param message JoinList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IJoinList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified JoinList message, length delimited. Does not implicitly {@link JoinList.verify|verify} messages.
     * @param message JoinList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IJoinList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a JoinList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns JoinList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): JoinList;

    /**
     * Decodes a JoinList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns JoinList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): JoinList;

    /**
     * Verifies a JoinList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a JoinList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns JoinList
     */
    public static fromObject(object: { [k: string]: any }): JoinList;

    /**
     * Creates a plain object from a JoinList message. Also converts values to other types if specified.
     * @param message JoinList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: JoinList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this JoinList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Leave. */
export interface ILeave {

    /** Leave block */
    block?: (string|null);

    /** Leave date */
    date?: (google.protobuf.ITimestamp|null);

    /** Leave author */
    author?: (string|null);

    /** Leave username */
    username?: (string|null);

    /** Leave avatar */
    avatar?: (string|null);

    /** Leave likes */
    likes?: (ILike[]|null);
}

/** Represents a Leave. */
export class Leave implements ILeave {

    /**
     * Constructs a new Leave.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILeave);

    /** Leave block. */
    public block: string;

    /** Leave date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** Leave author. */
    public author: string;

    /** Leave username. */
    public username: string;

    /** Leave avatar. */
    public avatar: string;

    /** Leave likes. */
    public likes: ILike[];

    /**
     * Creates a new Leave instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Leave instance
     */
    public static create(properties?: ILeave): Leave;

    /**
     * Encodes the specified Leave message. Does not implicitly {@link Leave.verify|verify} messages.
     * @param message Leave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Leave message, length delimited. Does not implicitly {@link Leave.verify|verify} messages.
     * @param message Leave message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILeave, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Leave message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Leave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Leave;

    /**
     * Decodes a Leave message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Leave
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Leave;

    /**
     * Verifies a Leave message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Leave message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Leave
     */
    public static fromObject(object: { [k: string]: any }): Leave;

    /**
     * Creates a plain object from a Leave message. Also converts values to other types if specified.
     * @param message Leave
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Leave, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Leave to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LeaveList. */
export interface ILeaveList {

    /** LeaveList items */
    items?: (ILeave[]|null);
}

/** Represents a LeaveList. */
export class LeaveList implements ILeaveList {

    /**
     * Constructs a new LeaveList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILeaveList);

    /** LeaveList items. */
    public items: ILeave[];

    /**
     * Creates a new LeaveList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LeaveList instance
     */
    public static create(properties?: ILeaveList): LeaveList;

    /**
     * Encodes the specified LeaveList message. Does not implicitly {@link LeaveList.verify|verify} messages.
     * @param message LeaveList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILeaveList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LeaveList message, length delimited. Does not implicitly {@link LeaveList.verify|verify} messages.
     * @param message LeaveList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILeaveList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LeaveList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LeaveList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LeaveList;

    /**
     * Decodes a LeaveList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LeaveList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LeaveList;

    /**
     * Verifies a LeaveList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LeaveList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LeaveList
     */
    public static fromObject(object: { [k: string]: any }): LeaveList;

    /**
     * Creates a plain object from a LeaveList message. Also converts values to other types if specified.
     * @param message LeaveList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LeaveList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LeaveList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Files. */
export interface IFiles {

    /** Files block */
    block?: (string|null);

    /** Files target */
    target?: (string|null);

    /** Files date */
    date?: (google.protobuf.ITimestamp|null);

    /** Files author */
    author?: (string|null);

    /** Files username */
    username?: (string|null);

    /** Files avatar */
    avatar?: (string|null);

    /** Files caption */
    caption?: (string|null);

    /** Files files */
    files?: (IFile[]|null);

    /** Files comments */
    comments?: (IComment[]|null);

    /** Files likes */
    likes?: (ILike[]|null);

    /** Files threads */
    threads?: (string[]|null);
}

/** Represents a Files. */
export class Files implements IFiles {

    /**
     * Constructs a new Files.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFiles);

    /** Files block. */
    public block: string;

    /** Files target. */
    public target: string;

    /** Files date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** Files author. */
    public author: string;

    /** Files username. */
    public username: string;

    /** Files avatar. */
    public avatar: string;

    /** Files caption. */
    public caption: string;

    /** Files files. */
    public files: IFile[];

    /** Files comments. */
    public comments: IComment[];

    /** Files likes. */
    public likes: ILike[];

    /** Files threads. */
    public threads: string[];

    /**
     * Creates a new Files instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Files instance
     */
    public static create(properties?: IFiles): Files;

    /**
     * Encodes the specified Files message. Does not implicitly {@link Files.verify|verify} messages.
     * @param message Files message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFiles, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Files message, length delimited. Does not implicitly {@link Files.verify|verify} messages.
     * @param message Files message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFiles, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Files message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Files
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Files;

    /**
     * Decodes a Files message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Files
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Files;

    /**
     * Verifies a Files message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Files message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Files
     */
    public static fromObject(object: { [k: string]: any }): Files;

    /**
     * Creates a plain object from a Files message. Also converts values to other types if specified.
     * @param message Files
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Files, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Files to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a FilesList. */
export interface IFilesList {

    /** FilesList items */
    items?: (IFiles[]|null);
}

/** Represents a FilesList. */
export class FilesList implements IFilesList {

    /**
     * Constructs a new FilesList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFilesList);

    /** FilesList items. */
    public items: IFiles[];

    /**
     * Creates a new FilesList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FilesList instance
     */
    public static create(properties?: IFilesList): FilesList;

    /**
     * Encodes the specified FilesList message. Does not implicitly {@link FilesList.verify|verify} messages.
     * @param message FilesList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFilesList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FilesList message, length delimited. Does not implicitly {@link FilesList.verify|verify} messages.
     * @param message FilesList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFilesList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FilesList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FilesList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FilesList;

    /**
     * Decodes a FilesList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FilesList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FilesList;

    /**
     * Verifies a FilesList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FilesList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FilesList
     */
    public static fromObject(object: { [k: string]: any }): FilesList;

    /**
     * Creates a plain object from a FilesList message. Also converts values to other types if specified.
     * @param message FilesList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FilesList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FilesList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a File. */
export interface IFile {

    /** File index */
    index?: (number|null);

    /** File file */
    file?: (IFileIndex|null);

    /** File links */
    links?: ({ [k: string]: IFileIndex }|null);
}

/** Represents a File. */
export class File implements IFile {

    /**
     * Constructs a new File.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFile);

    /** File index. */
    public index: number;

    /** File file. */
    public file?: (IFileIndex|null);

    /** File links. */
    public links: { [k: string]: IFileIndex };

    /**
     * Creates a new File instance using the specified properties.
     * @param [properties] Properties to set
     * @returns File instance
     */
    public static create(properties?: IFile): File;

    /**
     * Encodes the specified File message. Does not implicitly {@link File.verify|verify} messages.
     * @param message File message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified File message, length delimited. Does not implicitly {@link File.verify|verify} messages.
     * @param message File message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a File message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns File
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): File;

    /**
     * Decodes a File message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns File
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): File;

    /**
     * Verifies a File message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a File message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns File
     */
    public static fromObject(object: { [k: string]: any }): File;

    /**
     * Creates a plain object from a File message. Also converts values to other types if specified.
     * @param message File
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: File, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this File to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Text. */
export interface IText {

    /** Text block */
    block?: (string|null);

    /** Text date */
    date?: (google.protobuf.ITimestamp|null);

    /** Text author */
    author?: (string|null);

    /** Text username */
    username?: (string|null);

    /** Text avatar */
    avatar?: (string|null);

    /** Text body */
    body?: (string|null);

    /** Text comments */
    comments?: (IComment[]|null);

    /** Text likes */
    likes?: (ILike[]|null);
}

/** Represents a Text. */
export class Text implements IText {

    /**
     * Constructs a new Text.
     * @param [properties] Properties to set
     */
    constructor(properties?: IText);

    /** Text block. */
    public block: string;

    /** Text date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** Text author. */
    public author: string;

    /** Text username. */
    public username: string;

    /** Text avatar. */
    public avatar: string;

    /** Text body. */
    public body: string;

    /** Text comments. */
    public comments: IComment[];

    /** Text likes. */
    public likes: ILike[];

    /**
     * Creates a new Text instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Text instance
     */
    public static create(properties?: IText): Text;

    /**
     * Encodes the specified Text message. Does not implicitly {@link Text.verify|verify} messages.
     * @param message Text message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Text message, length delimited. Does not implicitly {@link Text.verify|verify} messages.
     * @param message Text message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Text message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Text
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Text;

    /**
     * Decodes a Text message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Text
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Text;

    /**
     * Verifies a Text message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Text message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Text
     */
    public static fromObject(object: { [k: string]: any }): Text;

    /**
     * Creates a plain object from a Text message. Also converts values to other types if specified.
     * @param message Text
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Text, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Text to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a TextList. */
export interface ITextList {

    /** TextList items */
    items?: (IText[]|null);
}

/** Represents a TextList. */
export class TextList implements ITextList {

    /**
     * Constructs a new TextList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITextList);

    /** TextList items. */
    public items: IText[];

    /**
     * Creates a new TextList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TextList instance
     */
    public static create(properties?: ITextList): TextList;

    /**
     * Encodes the specified TextList message. Does not implicitly {@link TextList.verify|verify} messages.
     * @param message TextList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITextList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TextList message, length delimited. Does not implicitly {@link TextList.verify|verify} messages.
     * @param message TextList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITextList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TextList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TextList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TextList;

    /**
     * Decodes a TextList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TextList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TextList;

    /**
     * Verifies a TextList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TextList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TextList
     */
    public static fromObject(object: { [k: string]: any }): TextList;

    /**
     * Creates a plain object from a TextList message. Also converts values to other types if specified.
     * @param message TextList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TextList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TextList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Like. */
export interface ILike {

    /** Like id */
    id?: (string|null);

    /** Like date */
    date?: (google.protobuf.ITimestamp|null);

    /** Like author */
    author?: (string|null);

    /** Like username */
    username?: (string|null);

    /** Like avatar */
    avatar?: (string|null);

    /** Like target */
    target?: (IFeedItem|null);
}

/** Represents a Like. */
export class Like implements ILike {

    /**
     * Constructs a new Like.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILike);

    /** Like id. */
    public id: string;

    /** Like date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** Like author. */
    public author: string;

    /** Like username. */
    public username: string;

    /** Like avatar. */
    public avatar: string;

    /** Like target. */
    public target?: (IFeedItem|null);

    /**
     * Creates a new Like instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Like instance
     */
    public static create(properties?: ILike): Like;

    /**
     * Encodes the specified Like message. Does not implicitly {@link Like.verify|verify} messages.
     * @param message Like message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILike, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Like message, length delimited. Does not implicitly {@link Like.verify|verify} messages.
     * @param message Like message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILike, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Like message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Like
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Like;

    /**
     * Decodes a Like message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Like
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Like;

    /**
     * Verifies a Like message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Like message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Like
     */
    public static fromObject(object: { [k: string]: any }): Like;

    /**
     * Creates a plain object from a Like message. Also converts values to other types if specified.
     * @param message Like
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Like, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Like to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a LikeList. */
export interface ILikeList {

    /** LikeList items */
    items?: (ILike[]|null);
}

/** Represents a LikeList. */
export class LikeList implements ILikeList {

    /**
     * Constructs a new LikeList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILikeList);

    /** LikeList items. */
    public items: ILike[];

    /**
     * Creates a new LikeList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LikeList instance
     */
    public static create(properties?: ILikeList): LikeList;

    /**
     * Encodes the specified LikeList message. Does not implicitly {@link LikeList.verify|verify} messages.
     * @param message LikeList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILikeList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LikeList message, length delimited. Does not implicitly {@link LikeList.verify|verify} messages.
     * @param message LikeList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILikeList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LikeList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LikeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LikeList;

    /**
     * Decodes a LikeList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LikeList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LikeList;

    /**
     * Verifies a LikeList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LikeList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LikeList
     */
    public static fromObject(object: { [k: string]: any }): LikeList;

    /**
     * Creates a plain object from a LikeList message. Also converts values to other types if specified.
     * @param message LikeList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LikeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LikeList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a Comment. */
export interface IComment {

    /** Comment id */
    id?: (string|null);

    /** Comment date */
    date?: (google.protobuf.ITimestamp|null);

    /** Comment author */
    author?: (string|null);

    /** Comment username */
    username?: (string|null);

    /** Comment avatar */
    avatar?: (string|null);

    /** Comment body */
    body?: (string|null);

    /** Comment target */
    target?: (IFeedItem|null);
}

/** Represents a Comment. */
export class Comment implements IComment {

    /**
     * Constructs a new Comment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IComment);

    /** Comment id. */
    public id: string;

    /** Comment date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** Comment author. */
    public author: string;

    /** Comment username. */
    public username: string;

    /** Comment avatar. */
    public avatar: string;

    /** Comment body. */
    public body: string;

    /** Comment target. */
    public target?: (IFeedItem|null);

    /**
     * Creates a new Comment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Comment instance
     */
    public static create(properties?: IComment): Comment;

    /**
     * Encodes the specified Comment message. Does not implicitly {@link Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Comment message, length delimited. Does not implicitly {@link Comment.verify|verify} messages.
     * @param message Comment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Comment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Comment;

    /**
     * Decodes a Comment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Comment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Comment;

    /**
     * Verifies a Comment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Comment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Comment
     */
    public static fromObject(object: { [k: string]: any }): Comment;

    /**
     * Creates a plain object from a Comment message. Also converts values to other types if specified.
     * @param message Comment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Comment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Comment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a CommentList. */
export interface ICommentList {

    /** CommentList items */
    items?: (IComment[]|null);
}

/** Represents a CommentList. */
export class CommentList implements ICommentList {

    /**
     * Constructs a new CommentList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommentList);

    /** CommentList items. */
    public items: IComment[];

    /**
     * Creates a new CommentList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CommentList instance
     */
    public static create(properties?: ICommentList): CommentList;

    /**
     * Encodes the specified CommentList message. Does not implicitly {@link CommentList.verify|verify} messages.
     * @param message CommentList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommentList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CommentList message, length delimited. Does not implicitly {@link CommentList.verify|verify} messages.
     * @param message CommentList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommentList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CommentList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CommentList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CommentList;

    /**
     * Decodes a CommentList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CommentList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CommentList;

    /**
     * Verifies a CommentList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CommentList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CommentList
     */
    public static fromObject(object: { [k: string]: any }): CommentList;

    /**
     * Creates a plain object from a CommentList message. Also converts values to other types if specified.
     * @param message CommentList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CommentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CommentList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** QueryType enum. */
export enum QueryType {
    THREAD_BACKUPS = 0,
    CONTACTS = 1
}

/** Properties of a QueryOptions. */
export interface IQueryOptions {

    /** QueryOptions local */
    local?: (boolean|null);

    /** QueryOptions limit */
    limit?: (number|null);

    /** QueryOptions wait */
    wait?: (number|null);

    /** QueryOptions filter */
    filter?: (QueryOptions.FilterType|null);
}

/** Represents a QueryOptions. */
export class QueryOptions implements IQueryOptions {

    /**
     * Constructs a new QueryOptions.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryOptions);

    /** QueryOptions local. */
    public local: boolean;

    /** QueryOptions limit. */
    public limit: number;

    /** QueryOptions wait. */
    public wait: number;

    /** QueryOptions filter. */
    public filter: QueryOptions.FilterType;

    /**
     * Creates a new QueryOptions instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryOptions instance
     */
    public static create(properties?: IQueryOptions): QueryOptions;

    /**
     * Encodes the specified QueryOptions message. Does not implicitly {@link QueryOptions.verify|verify} messages.
     * @param message QueryOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryOptions message, length delimited. Does not implicitly {@link QueryOptions.verify|verify} messages.
     * @param message QueryOptions message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryOptions, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryOptions message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryOptions;

    /**
     * Decodes a QueryOptions message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryOptions
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryOptions;

    /**
     * Verifies a QueryOptions message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QueryOptions message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryOptions
     */
    public static fromObject(object: { [k: string]: any }): QueryOptions;

    /**
     * Creates a plain object from a QueryOptions message. Also converts values to other types if specified.
     * @param message QueryOptions
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QueryOptions to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace QueryOptions {

    /** FilterType enum. */
    enum FilterType {
        NO_FILTER = 0,
        HIDE_OLDER = 1
    }
}

/** Properties of a Query. */
export interface IQuery {

    /** Query token */
    token?: (string|null);

    /** Query type */
    type?: (QueryType|null);

    /** Query options */
    options?: (IQueryOptions|null);

    /** Query payload */
    payload?: (google.protobuf.IAny|null);
}

/** Represents a Query. */
export class Query implements IQuery {

    /**
     * Constructs a new Query.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQuery);

    /** Query token. */
    public token: string;

    /** Query type. */
    public type: QueryType;

    /** Query options. */
    public options?: (IQueryOptions|null);

    /** Query payload. */
    public payload?: (google.protobuf.IAny|null);

    /**
     * Creates a new Query instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Query instance
     */
    public static create(properties?: IQuery): Query;

    /**
     * Encodes the specified Query message. Does not implicitly {@link Query.verify|verify} messages.
     * @param message Query message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Query message, length delimited. Does not implicitly {@link Query.verify|verify} messages.
     * @param message Query message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Query message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Query
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Query;

    /**
     * Decodes a Query message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Query
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Query;

    /**
     * Verifies a Query message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Query message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Query
     */
    public static fromObject(object: { [k: string]: any }): Query;

    /**
     * Creates a plain object from a Query message. Also converts values to other types if specified.
     * @param message Query
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Query, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Query to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PubSubQuery. */
export interface IPubSubQuery {

    /** PubSubQuery id */
    id?: (string|null);

    /** PubSubQuery type */
    type?: (QueryType|null);

    /** PubSubQuery payload */
    payload?: (google.protobuf.IAny|null);

    /** PubSubQuery responseType */
    responseType?: (PubSubQuery.ResponseType|null);
}

/** Represents a PubSubQuery. */
export class PubSubQuery implements IPubSubQuery {

    /**
     * Constructs a new PubSubQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPubSubQuery);

    /** PubSubQuery id. */
    public id: string;

    /** PubSubQuery type. */
    public type: QueryType;

    /** PubSubQuery payload. */
    public payload?: (google.protobuf.IAny|null);

    /** PubSubQuery responseType. */
    public responseType: PubSubQuery.ResponseType;

    /**
     * Creates a new PubSubQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PubSubQuery instance
     */
    public static create(properties?: IPubSubQuery): PubSubQuery;

    /**
     * Encodes the specified PubSubQuery message. Does not implicitly {@link PubSubQuery.verify|verify} messages.
     * @param message PubSubQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPubSubQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PubSubQuery message, length delimited. Does not implicitly {@link PubSubQuery.verify|verify} messages.
     * @param message PubSubQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPubSubQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PubSubQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PubSubQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PubSubQuery;

    /**
     * Decodes a PubSubQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PubSubQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PubSubQuery;

    /**
     * Verifies a PubSubQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PubSubQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PubSubQuery
     */
    public static fromObject(object: { [k: string]: any }): PubSubQuery;

    /**
     * Creates a plain object from a PubSubQuery message. Also converts values to other types if specified.
     * @param message PubSubQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PubSubQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PubSubQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace PubSubQuery {

    /** ResponseType enum. */
    enum ResponseType {
        P2P = 0,
        PUBSUB = 1
    }
}

/** Properties of a QueryResult. */
export interface IQueryResult {

    /** QueryResult id */
    id?: (string|null);

    /** QueryResult date */
    date?: (google.protobuf.ITimestamp|null);

    /** QueryResult local */
    local?: (boolean|null);

    /** QueryResult value */
    value?: (google.protobuf.IAny|null);
}

/** Represents a QueryResult. */
export class QueryResult implements IQueryResult {

    /**
     * Constructs a new QueryResult.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryResult);

    /** QueryResult id. */
    public id: string;

    /** QueryResult date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** QueryResult local. */
    public local: boolean;

    /** QueryResult value. */
    public value?: (google.protobuf.IAny|null);

    /**
     * Creates a new QueryResult instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryResult instance
     */
    public static create(properties?: IQueryResult): QueryResult;

    /**
     * Encodes the specified QueryResult message. Does not implicitly {@link QueryResult.verify|verify} messages.
     * @param message QueryResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryResult message, length delimited. Does not implicitly {@link QueryResult.verify|verify} messages.
     * @param message QueryResult message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryResult, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryResult message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryResult;

    /**
     * Decodes a QueryResult message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryResult
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryResult;

    /**
     * Verifies a QueryResult message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QueryResult message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryResult
     */
    public static fromObject(object: { [k: string]: any }): QueryResult;

    /**
     * Creates a plain object from a QueryResult message. Also converts values to other types if specified.
     * @param message QueryResult
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QueryResult to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QueryResults. */
export interface IQueryResults {

    /** QueryResults type */
    type?: (QueryType|null);

    /** QueryResults items */
    items?: (IQueryResult[]|null);
}

/** Represents a QueryResults. */
export class QueryResults implements IQueryResults {

    /**
     * Constructs a new QueryResults.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryResults);

    /** QueryResults type. */
    public type: QueryType;

    /** QueryResults items. */
    public items: IQueryResult[];

    /**
     * Creates a new QueryResults instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryResults instance
     */
    public static create(properties?: IQueryResults): QueryResults;

    /**
     * Encodes the specified QueryResults message. Does not implicitly {@link QueryResults.verify|verify} messages.
     * @param message QueryResults message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryResults message, length delimited. Does not implicitly {@link QueryResults.verify|verify} messages.
     * @param message QueryResults message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryResults message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryResults
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryResults;

    /**
     * Decodes a QueryResults message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryResults
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryResults;

    /**
     * Verifies a QueryResults message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QueryResults message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryResults
     */
    public static fromObject(object: { [k: string]: any }): QueryResults;

    /**
     * Creates a plain object from a QueryResults message. Also converts values to other types if specified.
     * @param message QueryResults
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QueryResults to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PubSubQueryResults. */
export interface IPubSubQueryResults {

    /** PubSubQueryResults id */
    id?: (string|null);

    /** PubSubQueryResults results */
    results?: (IQueryResults|null);
}

/** Represents a PubSubQueryResults. */
export class PubSubQueryResults implements IPubSubQueryResults {

    /**
     * Constructs a new PubSubQueryResults.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPubSubQueryResults);

    /** PubSubQueryResults id. */
    public id: string;

    /** PubSubQueryResults results. */
    public results?: (IQueryResults|null);

    /**
     * Creates a new PubSubQueryResults instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PubSubQueryResults instance
     */
    public static create(properties?: IPubSubQueryResults): PubSubQueryResults;

    /**
     * Encodes the specified PubSubQueryResults message. Does not implicitly {@link PubSubQueryResults.verify|verify} messages.
     * @param message PubSubQueryResults message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPubSubQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PubSubQueryResults message, length delimited. Does not implicitly {@link PubSubQueryResults.verify|verify} messages.
     * @param message PubSubQueryResults message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPubSubQueryResults, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PubSubQueryResults message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PubSubQueryResults
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PubSubQueryResults;

    /**
     * Decodes a PubSubQueryResults message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PubSubQueryResults
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PubSubQueryResults;

    /**
     * Verifies a PubSubQueryResults message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PubSubQueryResults message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PubSubQueryResults
     */
    public static fromObject(object: { [k: string]: any }): PubSubQueryResults;

    /**
     * Creates a plain object from a PubSubQueryResults message. Also converts values to other types if specified.
     * @param message PubSubQueryResults
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PubSubQueryResults, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PubSubQueryResults to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a QueryEvent. */
export interface IQueryEvent {

    /** QueryEvent type */
    type?: (QueryEvent.Type|null);

    /** QueryEvent data */
    data?: (IQueryResult|null);
}

/** Represents a QueryEvent. */
export class QueryEvent implements IQueryEvent {

    /**
     * Constructs a new QueryEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IQueryEvent);

    /** QueryEvent type. */
    public type: QueryEvent.Type;

    /** QueryEvent data. */
    public data?: (IQueryResult|null);

    /**
     * Creates a new QueryEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns QueryEvent instance
     */
    public static create(properties?: IQueryEvent): QueryEvent;

    /**
     * Encodes the specified QueryEvent message. Does not implicitly {@link QueryEvent.verify|verify} messages.
     * @param message QueryEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IQueryEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified QueryEvent message, length delimited. Does not implicitly {@link QueryEvent.verify|verify} messages.
     * @param message QueryEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IQueryEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a QueryEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns QueryEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): QueryEvent;

    /**
     * Decodes a QueryEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns QueryEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): QueryEvent;

    /**
     * Verifies a QueryEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a QueryEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns QueryEvent
     */
    public static fromObject(object: { [k: string]: any }): QueryEvent;

    /**
     * Creates a plain object from a QueryEvent message. Also converts values to other types if specified.
     * @param message QueryEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: QueryEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this QueryEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace QueryEvent {

    /** Type enum. */
    enum Type {
        DATA = 0,
        DONE = 1
    }
}

/** Properties of a ContactQuery. */
export interface IContactQuery {

    /** ContactQuery id */
    id?: (string|null);

    /** ContactQuery address */
    address?: (string|null);

    /** ContactQuery username */
    username?: (string|null);
}

/** Represents a ContactQuery. */
export class ContactQuery implements IContactQuery {

    /**
     * Constructs a new ContactQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: IContactQuery);

    /** ContactQuery id. */
    public id: string;

    /** ContactQuery address. */
    public address: string;

    /** ContactQuery username. */
    public username: string;

    /**
     * Creates a new ContactQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ContactQuery instance
     */
    public static create(properties?: IContactQuery): ContactQuery;

    /**
     * Encodes the specified ContactQuery message. Does not implicitly {@link ContactQuery.verify|verify} messages.
     * @param message ContactQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IContactQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ContactQuery message, length delimited. Does not implicitly {@link ContactQuery.verify|verify} messages.
     * @param message ContactQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IContactQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ContactQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ContactQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ContactQuery;

    /**
     * Decodes a ContactQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ContactQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ContactQuery;

    /**
     * Verifies a ContactQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ContactQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ContactQuery
     */
    public static fromObject(object: { [k: string]: any }): ContactQuery;

    /**
     * Creates a plain object from a ContactQuery message. Also converts values to other types if specified.
     * @param message ContactQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ContactQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ContactQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadBackupQuery. */
export interface IThreadBackupQuery {

    /** ThreadBackupQuery address */
    address?: (string|null);
}

/** Represents a ThreadBackupQuery. */
export class ThreadBackupQuery implements IThreadBackupQuery {

    /**
     * Constructs a new ThreadBackupQuery.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadBackupQuery);

    /** ThreadBackupQuery address. */
    public address: string;

    /**
     * Creates a new ThreadBackupQuery instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadBackupQuery instance
     */
    public static create(properties?: IThreadBackupQuery): ThreadBackupQuery;

    /**
     * Encodes the specified ThreadBackupQuery message. Does not implicitly {@link ThreadBackupQuery.verify|verify} messages.
     * @param message ThreadBackupQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadBackupQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadBackupQuery message, length delimited. Does not implicitly {@link ThreadBackupQuery.verify|verify} messages.
     * @param message ThreadBackupQuery message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadBackupQuery, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadBackupQuery message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadBackupQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadBackupQuery;

    /**
     * Decodes a ThreadBackupQuery message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadBackupQuery
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadBackupQuery;

    /**
     * Verifies a ThreadBackupQuery message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadBackupQuery message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadBackupQuery
     */
    public static fromObject(object: { [k: string]: any }): ThreadBackupQuery;

    /**
     * Creates a plain object from a ThreadBackupQuery message. Also converts values to other types if specified.
     * @param message ThreadBackupQuery
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadBackupQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadBackupQuery to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadEnvelope. */
export interface IThreadEnvelope {

    /** ThreadEnvelope thread */
    thread?: (string|null);

    /** ThreadEnvelope hash */
    hash?: (string|null);

    /** ThreadEnvelope ciphertext */
    ciphertext?: (Uint8Array|null);
}

/** Represents a ThreadEnvelope. */
export class ThreadEnvelope implements IThreadEnvelope {

    /**
     * Constructs a new ThreadEnvelope.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadEnvelope);

    /** ThreadEnvelope thread. */
    public thread: string;

    /** ThreadEnvelope hash. */
    public hash: string;

    /** ThreadEnvelope ciphertext. */
    public ciphertext: Uint8Array;

    /**
     * Creates a new ThreadEnvelope instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadEnvelope instance
     */
    public static create(properties?: IThreadEnvelope): ThreadEnvelope;

    /**
     * Encodes the specified ThreadEnvelope message. Does not implicitly {@link ThreadEnvelope.verify|verify} messages.
     * @param message ThreadEnvelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadEnvelope message, length delimited. Does not implicitly {@link ThreadEnvelope.verify|verify} messages.
     * @param message ThreadEnvelope message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadEnvelope, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadEnvelope message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadEnvelope;

    /**
     * Decodes a ThreadEnvelope message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadEnvelope
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadEnvelope;

    /**
     * Verifies a ThreadEnvelope message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadEnvelope message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadEnvelope
     */
    public static fromObject(object: { [k: string]: any }): ThreadEnvelope;

    /**
     * Creates a plain object from a ThreadEnvelope message. Also converts values to other types if specified.
     * @param message ThreadEnvelope
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadEnvelope, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadEnvelope to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadBlock. */
export interface IThreadBlock {

    /** ThreadBlock header */
    header?: (IThreadBlockHeader|null);

    /** ThreadBlock type */
    type?: (ThreadBlock.Type|null);

    /** ThreadBlock payload */
    payload?: (google.protobuf.IAny|null);
}

/** Represents a ThreadBlock. */
export class ThreadBlock implements IThreadBlock {

    /**
     * Constructs a new ThreadBlock.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadBlock);

    /** ThreadBlock header. */
    public header?: (IThreadBlockHeader|null);

    /** ThreadBlock type. */
    public type: ThreadBlock.Type;

    /** ThreadBlock payload. */
    public payload?: (google.protobuf.IAny|null);

    /**
     * Creates a new ThreadBlock instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadBlock instance
     */
    public static create(properties?: IThreadBlock): ThreadBlock;

    /**
     * Encodes the specified ThreadBlock message. Does not implicitly {@link ThreadBlock.verify|verify} messages.
     * @param message ThreadBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadBlock message, length delimited. Does not implicitly {@link ThreadBlock.verify|verify} messages.
     * @param message ThreadBlock message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadBlock, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadBlock message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadBlock;

    /**
     * Decodes a ThreadBlock message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadBlock
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadBlock;

    /**
     * Verifies a ThreadBlock message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadBlock message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadBlock
     */
    public static fromObject(object: { [k: string]: any }): ThreadBlock;

    /**
     * Creates a plain object from a ThreadBlock message. Also converts values to other types if specified.
     * @param message ThreadBlock
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadBlock to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ThreadBlock {

    /** Type enum. */
    enum Type {
        MERGE = 0,
        IGNORE = 1,
        FLAG = 2,
        JOIN = 3,
        ANNOUNCE = 4,
        LEAVE = 5,
        MESSAGE = 6,
        FILES = 7,
        COMMENT = 8,
        LIKE = 9,
        INVITE = 50
    }
}

/** Properties of a ThreadBlockHeader. */
export interface IThreadBlockHeader {

    /** ThreadBlockHeader date */
    date?: (google.protobuf.ITimestamp|null);

    /** ThreadBlockHeader parents */
    parents?: (string[]|null);

    /** ThreadBlockHeader author */
    author?: (string|null);

    /** ThreadBlockHeader address */
    address?: (string|null);
}

/** Represents a ThreadBlockHeader. */
export class ThreadBlockHeader implements IThreadBlockHeader {

    /**
     * Constructs a new ThreadBlockHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadBlockHeader);

    /** ThreadBlockHeader date. */
    public date?: (google.protobuf.ITimestamp|null);

    /** ThreadBlockHeader parents. */
    public parents: string[];

    /** ThreadBlockHeader author. */
    public author: string;

    /** ThreadBlockHeader address. */
    public address: string;

    /**
     * Creates a new ThreadBlockHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadBlockHeader instance
     */
    public static create(properties?: IThreadBlockHeader): ThreadBlockHeader;

    /**
     * Encodes the specified ThreadBlockHeader message. Does not implicitly {@link ThreadBlockHeader.verify|verify} messages.
     * @param message ThreadBlockHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadBlockHeader message, length delimited. Does not implicitly {@link ThreadBlockHeader.verify|verify} messages.
     * @param message ThreadBlockHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadBlockHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadBlockHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadBlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadBlockHeader;

    /**
     * Decodes a ThreadBlockHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadBlockHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadBlockHeader;

    /**
     * Verifies a ThreadBlockHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadBlockHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadBlockHeader
     */
    public static fromObject(object: { [k: string]: any }): ThreadBlockHeader;

    /**
     * Creates a plain object from a ThreadBlockHeader message. Also converts values to other types if specified.
     * @param message ThreadBlockHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadBlockHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadBlockHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadInvite. */
export interface IThreadInvite {

    /** ThreadInvite sk */
    sk?: (Uint8Array|null);

    /** ThreadInvite name */
    name?: (string|null);

    /** ThreadInvite schema */
    schema?: (string|null);

    /** ThreadInvite initiator */
    initiator?: (string|null);

    /** ThreadInvite contact */
    contact?: (IContact|null);

    /** ThreadInvite type */
    type?: (number|null);

    /** ThreadInvite sharing */
    sharing?: (number|null);

    /** ThreadInvite members */
    members?: (string[]|null);
}

/** Represents a ThreadInvite. */
export class ThreadInvite implements IThreadInvite {

    /**
     * Constructs a new ThreadInvite.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadInvite);

    /** ThreadInvite sk. */
    public sk: Uint8Array;

    /** ThreadInvite name. */
    public name: string;

    /** ThreadInvite schema. */
    public schema: string;

    /** ThreadInvite initiator. */
    public initiator: string;

    /** ThreadInvite contact. */
    public contact?: (IContact|null);

    /** ThreadInvite type. */
    public type: number;

    /** ThreadInvite sharing. */
    public sharing: number;

    /** ThreadInvite members. */
    public members: string[];

    /**
     * Creates a new ThreadInvite instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadInvite instance
     */
    public static create(properties?: IThreadInvite): ThreadInvite;

    /**
     * Encodes the specified ThreadInvite message. Does not implicitly {@link ThreadInvite.verify|verify} messages.
     * @param message ThreadInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadInvite message, length delimited. Does not implicitly {@link ThreadInvite.verify|verify} messages.
     * @param message ThreadInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadInvite message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadInvite;

    /**
     * Decodes a ThreadInvite message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadInvite;

    /**
     * Verifies a ThreadInvite message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadInvite message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadInvite
     */
    public static fromObject(object: { [k: string]: any }): ThreadInvite;

    /**
     * Creates a plain object from a ThreadInvite message. Also converts values to other types if specified.
     * @param message ThreadInvite
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadInvite, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadInvite to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadIgnore. */
export interface IThreadIgnore {

    /** ThreadIgnore target */
    target?: (string|null);
}

/** Represents a ThreadIgnore. */
export class ThreadIgnore implements IThreadIgnore {

    /**
     * Constructs a new ThreadIgnore.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadIgnore);

    /** ThreadIgnore target. */
    public target: string;

    /**
     * Creates a new ThreadIgnore instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadIgnore instance
     */
    public static create(properties?: IThreadIgnore): ThreadIgnore;

    /**
     * Encodes the specified ThreadIgnore message. Does not implicitly {@link ThreadIgnore.verify|verify} messages.
     * @param message ThreadIgnore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadIgnore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadIgnore message, length delimited. Does not implicitly {@link ThreadIgnore.verify|verify} messages.
     * @param message ThreadIgnore message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadIgnore, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadIgnore message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadIgnore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadIgnore;

    /**
     * Decodes a ThreadIgnore message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadIgnore
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadIgnore;

    /**
     * Verifies a ThreadIgnore message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadIgnore message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadIgnore
     */
    public static fromObject(object: { [k: string]: any }): ThreadIgnore;

    /**
     * Creates a plain object from a ThreadIgnore message. Also converts values to other types if specified.
     * @param message ThreadIgnore
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadIgnore, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadIgnore to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadFlag. */
export interface IThreadFlag {

    /** ThreadFlag target */
    target?: (string|null);
}

/** Represents a ThreadFlag. */
export class ThreadFlag implements IThreadFlag {

    /**
     * Constructs a new ThreadFlag.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadFlag);

    /** ThreadFlag target. */
    public target: string;

    /**
     * Creates a new ThreadFlag instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadFlag instance
     */
    public static create(properties?: IThreadFlag): ThreadFlag;

    /**
     * Encodes the specified ThreadFlag message. Does not implicitly {@link ThreadFlag.verify|verify} messages.
     * @param message ThreadFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadFlag message, length delimited. Does not implicitly {@link ThreadFlag.verify|verify} messages.
     * @param message ThreadFlag message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadFlag, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadFlag message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadFlag;

    /**
     * Decodes a ThreadFlag message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadFlag
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadFlag;

    /**
     * Verifies a ThreadFlag message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadFlag message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadFlag
     */
    public static fromObject(object: { [k: string]: any }): ThreadFlag;

    /**
     * Creates a plain object from a ThreadFlag message. Also converts values to other types if specified.
     * @param message ThreadFlag
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadFlag, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadFlag to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadJoin. */
export interface IThreadJoin {

    /** ThreadJoin inviter */
    inviter?: (string|null);

    /** ThreadJoin contact */
    contact?: (IContact|null);
}

/** Represents a ThreadJoin. */
export class ThreadJoin implements IThreadJoin {

    /**
     * Constructs a new ThreadJoin.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadJoin);

    /** ThreadJoin inviter. */
    public inviter: string;

    /** ThreadJoin contact. */
    public contact?: (IContact|null);

    /**
     * Creates a new ThreadJoin instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadJoin instance
     */
    public static create(properties?: IThreadJoin): ThreadJoin;

    /**
     * Encodes the specified ThreadJoin message. Does not implicitly {@link ThreadJoin.verify|verify} messages.
     * @param message ThreadJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadJoin message, length delimited. Does not implicitly {@link ThreadJoin.verify|verify} messages.
     * @param message ThreadJoin message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadJoin, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadJoin message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadJoin;

    /**
     * Decodes a ThreadJoin message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadJoin
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadJoin;

    /**
     * Verifies a ThreadJoin message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadJoin message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadJoin
     */
    public static fromObject(object: { [k: string]: any }): ThreadJoin;

    /**
     * Creates a plain object from a ThreadJoin message. Also converts values to other types if specified.
     * @param message ThreadJoin
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadJoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadJoin to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadAnnounce. */
export interface IThreadAnnounce {

    /** ThreadAnnounce contact */
    contact?: (IContact|null);
}

/** Represents a ThreadAnnounce. */
export class ThreadAnnounce implements IThreadAnnounce {

    /**
     * Constructs a new ThreadAnnounce.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadAnnounce);

    /** ThreadAnnounce contact. */
    public contact?: (IContact|null);

    /**
     * Creates a new ThreadAnnounce instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadAnnounce instance
     */
    public static create(properties?: IThreadAnnounce): ThreadAnnounce;

    /**
     * Encodes the specified ThreadAnnounce message. Does not implicitly {@link ThreadAnnounce.verify|verify} messages.
     * @param message ThreadAnnounce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadAnnounce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadAnnounce message, length delimited. Does not implicitly {@link ThreadAnnounce.verify|verify} messages.
     * @param message ThreadAnnounce message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadAnnounce, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadAnnounce message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadAnnounce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadAnnounce;

    /**
     * Decodes a ThreadAnnounce message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadAnnounce
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadAnnounce;

    /**
     * Verifies a ThreadAnnounce message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadAnnounce message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadAnnounce
     */
    public static fromObject(object: { [k: string]: any }): ThreadAnnounce;

    /**
     * Creates a plain object from a ThreadAnnounce message. Also converts values to other types if specified.
     * @param message ThreadAnnounce
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadAnnounce, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadAnnounce to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadMessage. */
export interface IThreadMessage {

    /** ThreadMessage body */
    body?: (string|null);
}

/** Represents a ThreadMessage. */
export class ThreadMessage implements IThreadMessage {

    /**
     * Constructs a new ThreadMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadMessage);

    /** ThreadMessage body. */
    public body: string;

    /**
     * Creates a new ThreadMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadMessage instance
     */
    public static create(properties?: IThreadMessage): ThreadMessage;

    /**
     * Encodes the specified ThreadMessage message. Does not implicitly {@link ThreadMessage.verify|verify} messages.
     * @param message ThreadMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadMessage message, length delimited. Does not implicitly {@link ThreadMessage.verify|verify} messages.
     * @param message ThreadMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadMessage;

    /**
     * Decodes a ThreadMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadMessage;

    /**
     * Verifies a ThreadMessage message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadMessage
     */
    public static fromObject(object: { [k: string]: any }): ThreadMessage;

    /**
     * Creates a plain object from a ThreadMessage message. Also converts values to other types if specified.
     * @param message ThreadMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadFiles. */
export interface IThreadFiles {

    /** ThreadFiles target */
    target?: (string|null);

    /** ThreadFiles body */
    body?: (string|null);

    /** ThreadFiles keys */
    keys?: ({ [k: string]: string }|null);
}

/** Represents a ThreadFiles. */
export class ThreadFiles implements IThreadFiles {

    /**
     * Constructs a new ThreadFiles.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadFiles);

    /** ThreadFiles target. */
    public target: string;

    /** ThreadFiles body. */
    public body: string;

    /** ThreadFiles keys. */
    public keys: { [k: string]: string };

    /**
     * Creates a new ThreadFiles instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadFiles instance
     */
    public static create(properties?: IThreadFiles): ThreadFiles;

    /**
     * Encodes the specified ThreadFiles message. Does not implicitly {@link ThreadFiles.verify|verify} messages.
     * @param message ThreadFiles message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadFiles, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadFiles message, length delimited. Does not implicitly {@link ThreadFiles.verify|verify} messages.
     * @param message ThreadFiles message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadFiles, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadFiles message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadFiles
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadFiles;

    /**
     * Decodes a ThreadFiles message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadFiles
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadFiles;

    /**
     * Verifies a ThreadFiles message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadFiles message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadFiles
     */
    public static fromObject(object: { [k: string]: any }): ThreadFiles;

    /**
     * Creates a plain object from a ThreadFiles message. Also converts values to other types if specified.
     * @param message ThreadFiles
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadFiles, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadFiles to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadComment. */
export interface IThreadComment {

    /** ThreadComment target */
    target?: (string|null);

    /** ThreadComment body */
    body?: (string|null);
}

/** Represents a ThreadComment. */
export class ThreadComment implements IThreadComment {

    /**
     * Constructs a new ThreadComment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadComment);

    /** ThreadComment target. */
    public target: string;

    /** ThreadComment body. */
    public body: string;

    /**
     * Creates a new ThreadComment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadComment instance
     */
    public static create(properties?: IThreadComment): ThreadComment;

    /**
     * Encodes the specified ThreadComment message. Does not implicitly {@link ThreadComment.verify|verify} messages.
     * @param message ThreadComment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadComment message, length delimited. Does not implicitly {@link ThreadComment.verify|verify} messages.
     * @param message ThreadComment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadComment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadComment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadComment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadComment;

    /**
     * Decodes a ThreadComment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadComment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadComment;

    /**
     * Verifies a ThreadComment message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadComment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadComment
     */
    public static fromObject(object: { [k: string]: any }): ThreadComment;

    /**
     * Creates a plain object from a ThreadComment message. Also converts values to other types if specified.
     * @param message ThreadComment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadComment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadComment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ThreadLike. */
export interface IThreadLike {

    /** ThreadLike target */
    target?: (string|null);
}

/** Represents a ThreadLike. */
export class ThreadLike implements IThreadLike {

    /**
     * Constructs a new ThreadLike.
     * @param [properties] Properties to set
     */
    constructor(properties?: IThreadLike);

    /** ThreadLike target. */
    public target: string;

    /**
     * Creates a new ThreadLike instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ThreadLike instance
     */
    public static create(properties?: IThreadLike): ThreadLike;

    /**
     * Encodes the specified ThreadLike message. Does not implicitly {@link ThreadLike.verify|verify} messages.
     * @param message ThreadLike message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IThreadLike, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ThreadLike message, length delimited. Does not implicitly {@link ThreadLike.verify|verify} messages.
     * @param message ThreadLike message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IThreadLike, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ThreadLike message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ThreadLike
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ThreadLike;

    /**
     * Decodes a ThreadLike message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ThreadLike
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ThreadLike;

    /**
     * Verifies a ThreadLike message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ThreadLike message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ThreadLike
     */
    public static fromObject(object: { [k: string]: any }): ThreadLike;

    /**
     * Creates a plain object from a ThreadLike message. Also converts values to other types if specified.
     * @param message ThreadLike
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ThreadLike, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ThreadLike to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
