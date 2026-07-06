
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model OrderSnapshot
 * 
 */
export type OrderSnapshot = $Result.DefaultSelection<Prisma.$OrderSnapshotPayload>
/**
 * Model SyncLog
 * 
 */
export type SyncLog = $Result.DefaultSelection<Prisma.$SyncLogPayload>
/**
 * Model ScanRecord
 * 
 */
export type ScanRecord = $Result.DefaultSelection<Prisma.$ScanRecordPayload>
/**
 * Model ExceptionTicket
 * 
 */
export type ExceptionTicket = $Result.DefaultSelection<Prisma.$ExceptionTicketPayload>
/**
 * Model ApprovalRecord
 * 
 */
export type ApprovalRecord = $Result.DefaultSelection<Prisma.$ApprovalRecordPayload>
/**
 * Model CompensationRecord
 * 
 */
export type CompensationRecord = $Result.DefaultSelection<Prisma.$CompensationRecordPayload>
/**
 * Model InventoryRecord
 * 
 */
export type InventoryRecord = $Result.DefaultSelection<Prisma.$InventoryRecordPayload>
/**
 * Model QCRule
 * 
 */
export type QCRule = $Result.DefaultSelection<Prisma.$QCRulePayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more OrderSnapshots
 * const orderSnapshots = await prisma.orderSnapshot.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more OrderSnapshots
   * const orderSnapshots = await prisma.orderSnapshot.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.orderSnapshot`: Exposes CRUD operations for the **OrderSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderSnapshots
    * const orderSnapshots = await prisma.orderSnapshot.findMany()
    * ```
    */
  get orderSnapshot(): Prisma.OrderSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.syncLog`: Exposes CRUD operations for the **SyncLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SyncLogs
    * const syncLogs = await prisma.syncLog.findMany()
    * ```
    */
  get syncLog(): Prisma.SyncLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scanRecord`: Exposes CRUD operations for the **ScanRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScanRecords
    * const scanRecords = await prisma.scanRecord.findMany()
    * ```
    */
  get scanRecord(): Prisma.ScanRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.exceptionTicket`: Exposes CRUD operations for the **ExceptionTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExceptionTickets
    * const exceptionTickets = await prisma.exceptionTicket.findMany()
    * ```
    */
  get exceptionTicket(): Prisma.ExceptionTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.approvalRecord`: Exposes CRUD operations for the **ApprovalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApprovalRecords
    * const approvalRecords = await prisma.approvalRecord.findMany()
    * ```
    */
  get approvalRecord(): Prisma.ApprovalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compensationRecord`: Exposes CRUD operations for the **CompensationRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompensationRecords
    * const compensationRecords = await prisma.compensationRecord.findMany()
    * ```
    */
  get compensationRecord(): Prisma.CompensationRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryRecord`: Exposes CRUD operations for the **InventoryRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryRecords
    * const inventoryRecords = await prisma.inventoryRecord.findMany()
    * ```
    */
  get inventoryRecord(): Prisma.InventoryRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.qCRule`: Exposes CRUD operations for the **QCRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QCRules
    * const qCRules = await prisma.qCRule.findMany()
    * ```
    */
  get qCRule(): Prisma.QCRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    OrderSnapshot: 'OrderSnapshot',
    SyncLog: 'SyncLog',
    ScanRecord: 'ScanRecord',
    ExceptionTicket: 'ExceptionTicket',
    ApprovalRecord: 'ApprovalRecord',
    CompensationRecord: 'CompensationRecord',
    InventoryRecord: 'InventoryRecord',
    QCRule: 'QCRule',
    SystemConfig: 'SystemConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "orderSnapshot" | "syncLog" | "scanRecord" | "exceptionTicket" | "approvalRecord" | "compensationRecord" | "inventoryRecord" | "qCRule" | "systemConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      OrderSnapshot: {
        payload: Prisma.$OrderSnapshotPayload<ExtArgs>
        fields: Prisma.OrderSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          findFirst: {
            args: Prisma.OrderSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          findMany: {
            args: Prisma.OrderSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>[]
          }
          create: {
            args: Prisma.OrderSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          createMany: {
            args: Prisma.OrderSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>[]
          }
          delete: {
            args: Prisma.OrderSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          update: {
            args: Prisma.OrderSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.OrderSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.OrderSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderSnapshotPayload>
          }
          aggregate: {
            args: Prisma.OrderSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderSnapshot>
          }
          groupBy: {
            args: Prisma.OrderSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<OrderSnapshotCountAggregateOutputType> | number
          }
        }
      }
      SyncLog: {
        payload: Prisma.$SyncLogPayload<ExtArgs>
        fields: Prisma.SyncLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SyncLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SyncLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findFirst: {
            args: Prisma.SyncLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SyncLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          findMany: {
            args: Prisma.SyncLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          create: {
            args: Prisma.SyncLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          createMany: {
            args: Prisma.SyncLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SyncLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          delete: {
            args: Prisma.SyncLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          update: {
            args: Prisma.SyncLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          deleteMany: {
            args: Prisma.SyncLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SyncLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SyncLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>[]
          }
          upsert: {
            args: Prisma.SyncLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SyncLogPayload>
          }
          aggregate: {
            args: Prisma.SyncLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSyncLog>
          }
          groupBy: {
            args: Prisma.SyncLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<SyncLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.SyncLogCountArgs<ExtArgs>
            result: $Utils.Optional<SyncLogCountAggregateOutputType> | number
          }
        }
      }
      ScanRecord: {
        payload: Prisma.$ScanRecordPayload<ExtArgs>
        fields: Prisma.ScanRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScanRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScanRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>
          }
          findFirst: {
            args: Prisma.ScanRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScanRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>
          }
          findMany: {
            args: Prisma.ScanRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>[]
          }
          create: {
            args: Prisma.ScanRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>
          }
          createMany: {
            args: Prisma.ScanRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScanRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>[]
          }
          delete: {
            args: Prisma.ScanRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>
          }
          update: {
            args: Prisma.ScanRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>
          }
          deleteMany: {
            args: Prisma.ScanRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScanRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScanRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>[]
          }
          upsert: {
            args: Prisma.ScanRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScanRecordPayload>
          }
          aggregate: {
            args: Prisma.ScanRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScanRecord>
          }
          groupBy: {
            args: Prisma.ScanRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScanRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScanRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ScanRecordCountAggregateOutputType> | number
          }
        }
      }
      ExceptionTicket: {
        payload: Prisma.$ExceptionTicketPayload<ExtArgs>
        fields: Prisma.ExceptionTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExceptionTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExceptionTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>
          }
          findFirst: {
            args: Prisma.ExceptionTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExceptionTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>
          }
          findMany: {
            args: Prisma.ExceptionTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>[]
          }
          create: {
            args: Prisma.ExceptionTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>
          }
          createMany: {
            args: Prisma.ExceptionTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExceptionTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>[]
          }
          delete: {
            args: Prisma.ExceptionTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>
          }
          update: {
            args: Prisma.ExceptionTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>
          }
          deleteMany: {
            args: Prisma.ExceptionTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExceptionTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExceptionTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>[]
          }
          upsert: {
            args: Prisma.ExceptionTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExceptionTicketPayload>
          }
          aggregate: {
            args: Prisma.ExceptionTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExceptionTicket>
          }
          groupBy: {
            args: Prisma.ExceptionTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExceptionTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExceptionTicketCountArgs<ExtArgs>
            result: $Utils.Optional<ExceptionTicketCountAggregateOutputType> | number
          }
        }
      }
      ApprovalRecord: {
        payload: Prisma.$ApprovalRecordPayload<ExtArgs>
        fields: Prisma.ApprovalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApprovalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApprovalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>
          }
          findFirst: {
            args: Prisma.ApprovalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApprovalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>
          }
          findMany: {
            args: Prisma.ApprovalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>[]
          }
          create: {
            args: Prisma.ApprovalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>
          }
          createMany: {
            args: Prisma.ApprovalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApprovalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>[]
          }
          delete: {
            args: Prisma.ApprovalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>
          }
          update: {
            args: Prisma.ApprovalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>
          }
          deleteMany: {
            args: Prisma.ApprovalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApprovalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApprovalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>[]
          }
          upsert: {
            args: Prisma.ApprovalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApprovalRecordPayload>
          }
          aggregate: {
            args: Prisma.ApprovalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApprovalRecord>
          }
          groupBy: {
            args: Prisma.ApprovalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApprovalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<ApprovalRecordCountAggregateOutputType> | number
          }
        }
      }
      CompensationRecord: {
        payload: Prisma.$CompensationRecordPayload<ExtArgs>
        fields: Prisma.CompensationRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompensationRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompensationRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>
          }
          findFirst: {
            args: Prisma.CompensationRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompensationRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>
          }
          findMany: {
            args: Prisma.CompensationRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>[]
          }
          create: {
            args: Prisma.CompensationRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>
          }
          createMany: {
            args: Prisma.CompensationRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompensationRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>[]
          }
          delete: {
            args: Prisma.CompensationRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>
          }
          update: {
            args: Prisma.CompensationRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>
          }
          deleteMany: {
            args: Prisma.CompensationRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompensationRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompensationRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>[]
          }
          upsert: {
            args: Prisma.CompensationRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompensationRecordPayload>
          }
          aggregate: {
            args: Prisma.CompensationRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompensationRecord>
          }
          groupBy: {
            args: Prisma.CompensationRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompensationRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompensationRecordCountArgs<ExtArgs>
            result: $Utils.Optional<CompensationRecordCountAggregateOutputType> | number
          }
        }
      }
      InventoryRecord: {
        payload: Prisma.$InventoryRecordPayload<ExtArgs>
        fields: Prisma.InventoryRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>
          }
          findFirst: {
            args: Prisma.InventoryRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>
          }
          findMany: {
            args: Prisma.InventoryRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>[]
          }
          create: {
            args: Prisma.InventoryRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>
          }
          createMany: {
            args: Prisma.InventoryRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>[]
          }
          delete: {
            args: Prisma.InventoryRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>
          }
          update: {
            args: Prisma.InventoryRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>
          }
          deleteMany: {
            args: Prisma.InventoryRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>[]
          }
          upsert: {
            args: Prisma.InventoryRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryRecordPayload>
          }
          aggregate: {
            args: Prisma.InventoryRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryRecord>
          }
          groupBy: {
            args: Prisma.InventoryRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryRecordCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryRecordCountAggregateOutputType> | number
          }
        }
      }
      QCRule: {
        payload: Prisma.$QCRulePayload<ExtArgs>
        fields: Prisma.QCRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QCRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QCRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>
          }
          findFirst: {
            args: Prisma.QCRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QCRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>
          }
          findMany: {
            args: Prisma.QCRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>[]
          }
          create: {
            args: Prisma.QCRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>
          }
          createMany: {
            args: Prisma.QCRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QCRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>[]
          }
          delete: {
            args: Prisma.QCRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>
          }
          update: {
            args: Prisma.QCRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>
          }
          deleteMany: {
            args: Prisma.QCRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QCRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QCRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>[]
          }
          upsert: {
            args: Prisma.QCRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QCRulePayload>
          }
          aggregate: {
            args: Prisma.QCRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQCRule>
          }
          groupBy: {
            args: Prisma.QCRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<QCRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.QCRuleCountArgs<ExtArgs>
            result: $Utils.Optional<QCRuleCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    orderSnapshot?: OrderSnapshotOmit
    syncLog?: SyncLogOmit
    scanRecord?: ScanRecordOmit
    exceptionTicket?: ExceptionTicketOmit
    approvalRecord?: ApprovalRecordOmit
    compensationRecord?: CompensationRecordOmit
    inventoryRecord?: InventoryRecordOmit
    qCRule?: QCRuleOmit
    systemConfig?: SystemConfigOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrderSnapshotCountOutputType
   */

  export type OrderSnapshotCountOutputType = {
    exceptionTickets: number
    scanRecords: number
  }

  export type OrderSnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exceptionTickets?: boolean | OrderSnapshotCountOutputTypeCountExceptionTicketsArgs
    scanRecords?: boolean | OrderSnapshotCountOutputTypeCountScanRecordsArgs
  }

  // Custom InputTypes
  /**
   * OrderSnapshotCountOutputType without action
   */
  export type OrderSnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshotCountOutputType
     */
    select?: OrderSnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderSnapshotCountOutputType without action
   */
  export type OrderSnapshotCountOutputTypeCountExceptionTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionTicketWhereInput
  }

  /**
   * OrderSnapshotCountOutputType without action
   */
  export type OrderSnapshotCountOutputTypeCountScanRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanRecordWhereInput
  }


  /**
   * Count Type ExceptionTicketCountOutputType
   */

  export type ExceptionTicketCountOutputType = {
    scanRecords: number
    approvalRecords: number
    compensationRecords: number
  }

  export type ExceptionTicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    scanRecords?: boolean | ExceptionTicketCountOutputTypeCountScanRecordsArgs
    approvalRecords?: boolean | ExceptionTicketCountOutputTypeCountApprovalRecordsArgs
    compensationRecords?: boolean | ExceptionTicketCountOutputTypeCountCompensationRecordsArgs
  }

  // Custom InputTypes
  /**
   * ExceptionTicketCountOutputType without action
   */
  export type ExceptionTicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicketCountOutputType
     */
    select?: ExceptionTicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExceptionTicketCountOutputType without action
   */
  export type ExceptionTicketCountOutputTypeCountScanRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanRecordWhereInput
  }

  /**
   * ExceptionTicketCountOutputType without action
   */
  export type ExceptionTicketCountOutputTypeCountApprovalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRecordWhereInput
  }

  /**
   * ExceptionTicketCountOutputType without action
   */
  export type ExceptionTicketCountOutputTypeCountCompensationRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompensationRecordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model OrderSnapshot
   */

  export type AggregateOrderSnapshot = {
    _count: OrderSnapshotCountAggregateOutputType | null
    _avg: OrderSnapshotAvgAggregateOutputType | null
    _sum: OrderSnapshotSumAggregateOutputType | null
    _min: OrderSnapshotMinAggregateOutputType | null
    _max: OrderSnapshotMaxAggregateOutputType | null
  }

  export type OrderSnapshotAvgAggregateOutputType = {
    amount: number | null
  }

  export type OrderSnapshotSumAggregateOutputType = {
    amount: number | null
  }

  export type OrderSnapshotMinAggregateOutputType = {
    id: string | null
    v2OrderId: string | null
    externalCode: string | null
    storeName: string | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    amount: number | null
    syncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderSnapshotMaxAggregateOutputType = {
    id: string | null
    v2OrderId: string | null
    externalCode: string | null
    storeName: string | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    amount: number | null
    syncedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderSnapshotCountAggregateOutputType = {
    id: number
    v2OrderId: number
    externalCode: number
    storeName: number
    receiverName: number
    receiverPhone: number
    receiverAddress: number
    amount: number
    itemsJson: number
    syncedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderSnapshotAvgAggregateInputType = {
    amount?: true
  }

  export type OrderSnapshotSumAggregateInputType = {
    amount?: true
  }

  export type OrderSnapshotMinAggregateInputType = {
    id?: true
    v2OrderId?: true
    externalCode?: true
    storeName?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    amount?: true
    syncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderSnapshotMaxAggregateInputType = {
    id?: true
    v2OrderId?: true
    externalCode?: true
    storeName?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    amount?: true
    syncedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderSnapshotCountAggregateInputType = {
    id?: true
    v2OrderId?: true
    externalCode?: true
    storeName?: true
    receiverName?: true
    receiverPhone?: true
    receiverAddress?: true
    amount?: true
    itemsJson?: true
    syncedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderSnapshot to aggregate.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderSnapshots
    **/
    _count?: true | OrderSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderSnapshotMaxAggregateInputType
  }

  export type GetOrderSnapshotAggregateType<T extends OrderSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderSnapshot[P]>
      : GetScalarType<T[P], AggregateOrderSnapshot[P]>
  }




  export type OrderSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderSnapshotWhereInput
    orderBy?: OrderSnapshotOrderByWithAggregationInput | OrderSnapshotOrderByWithAggregationInput[]
    by: OrderSnapshotScalarFieldEnum[] | OrderSnapshotScalarFieldEnum
    having?: OrderSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderSnapshotCountAggregateInputType | true
    _avg?: OrderSnapshotAvgAggregateInputType
    _sum?: OrderSnapshotSumAggregateInputType
    _min?: OrderSnapshotMinAggregateInputType
    _max?: OrderSnapshotMaxAggregateInputType
  }

  export type OrderSnapshotGroupByOutputType = {
    id: string
    v2OrderId: string
    externalCode: string | null
    storeName: string | null
    receiverName: string | null
    receiverPhone: string | null
    receiverAddress: string | null
    amount: number | null
    itemsJson: JsonValue
    syncedAt: Date
    createdAt: Date
    updatedAt: Date
    _count: OrderSnapshotCountAggregateOutputType | null
    _avg: OrderSnapshotAvgAggregateOutputType | null
    _sum: OrderSnapshotSumAggregateOutputType | null
    _min: OrderSnapshotMinAggregateOutputType | null
    _max: OrderSnapshotMaxAggregateOutputType | null
  }

  type GetOrderSnapshotGroupByPayload<T extends OrderSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], OrderSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type OrderSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v2OrderId?: boolean
    externalCode?: boolean
    storeName?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    amount?: boolean
    itemsJson?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exceptionTickets?: boolean | OrderSnapshot$exceptionTicketsArgs<ExtArgs>
    scanRecords?: boolean | OrderSnapshot$scanRecordsArgs<ExtArgs>
    _count?: boolean | OrderSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderSnapshot"]>

  export type OrderSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v2OrderId?: boolean
    externalCode?: boolean
    storeName?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    amount?: boolean
    itemsJson?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["orderSnapshot"]>

  export type OrderSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    v2OrderId?: boolean
    externalCode?: boolean
    storeName?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    amount?: boolean
    itemsJson?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["orderSnapshot"]>

  export type OrderSnapshotSelectScalar = {
    id?: boolean
    v2OrderId?: boolean
    externalCode?: boolean
    storeName?: boolean
    receiverName?: boolean
    receiverPhone?: boolean
    receiverAddress?: boolean
    amount?: boolean
    itemsJson?: boolean
    syncedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "v2OrderId" | "externalCode" | "storeName" | "receiverName" | "receiverPhone" | "receiverAddress" | "amount" | "itemsJson" | "syncedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["orderSnapshot"]>
  export type OrderSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exceptionTickets?: boolean | OrderSnapshot$exceptionTicketsArgs<ExtArgs>
    scanRecords?: boolean | OrderSnapshot$scanRecordsArgs<ExtArgs>
    _count?: boolean | OrderSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OrderSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrderSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderSnapshot"
    objects: {
      exceptionTickets: Prisma.$ExceptionTicketPayload<ExtArgs>[]
      scanRecords: Prisma.$ScanRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      v2OrderId: string
      externalCode: string | null
      storeName: string | null
      receiverName: string | null
      receiverPhone: string | null
      receiverAddress: string | null
      amount: number | null
      itemsJson: Prisma.JsonValue
      syncedAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orderSnapshot"]>
    composites: {}
  }

  type OrderSnapshotGetPayload<S extends boolean | null | undefined | OrderSnapshotDefaultArgs> = $Result.GetResult<Prisma.$OrderSnapshotPayload, S>

  type OrderSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderSnapshotCountAggregateInputType | true
    }

  export interface OrderSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderSnapshot'], meta: { name: 'OrderSnapshot' } }
    /**
     * Find zero or one OrderSnapshot that matches the filter.
     * @param {OrderSnapshotFindUniqueArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderSnapshotFindUniqueArgs>(args: SelectSubset<T, OrderSnapshotFindUniqueArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderSnapshotFindUniqueOrThrowArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotFindFirstArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderSnapshotFindFirstArgs>(args?: SelectSubset<T, OrderSnapshotFindFirstArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotFindFirstOrThrowArgs} args - Arguments to find a OrderSnapshot
     * @example
     * // Get one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderSnapshots
     * const orderSnapshots = await prisma.orderSnapshot.findMany()
     * 
     * // Get first 10 OrderSnapshots
     * const orderSnapshots = await prisma.orderSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderSnapshotWithIdOnly = await prisma.orderSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderSnapshotFindManyArgs>(args?: SelectSubset<T, OrderSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderSnapshot.
     * @param {OrderSnapshotCreateArgs} args - Arguments to create a OrderSnapshot.
     * @example
     * // Create one OrderSnapshot
     * const OrderSnapshot = await prisma.orderSnapshot.create({
     *   data: {
     *     // ... data to create a OrderSnapshot
     *   }
     * })
     * 
     */
    create<T extends OrderSnapshotCreateArgs>(args: SelectSubset<T, OrderSnapshotCreateArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderSnapshots.
     * @param {OrderSnapshotCreateManyArgs} args - Arguments to create many OrderSnapshots.
     * @example
     * // Create many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderSnapshotCreateManyArgs>(args?: SelectSubset<T, OrderSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderSnapshots and returns the data saved in the database.
     * @param {OrderSnapshotCreateManyAndReturnArgs} args - Arguments to create many OrderSnapshots.
     * @example
     * // Create many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderSnapshots and only return the `id`
     * const orderSnapshotWithIdOnly = await prisma.orderSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderSnapshot.
     * @param {OrderSnapshotDeleteArgs} args - Arguments to delete one OrderSnapshot.
     * @example
     * // Delete one OrderSnapshot
     * const OrderSnapshot = await prisma.orderSnapshot.delete({
     *   where: {
     *     // ... filter to delete one OrderSnapshot
     *   }
     * })
     * 
     */
    delete<T extends OrderSnapshotDeleteArgs>(args: SelectSubset<T, OrderSnapshotDeleteArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderSnapshot.
     * @param {OrderSnapshotUpdateArgs} args - Arguments to update one OrderSnapshot.
     * @example
     * // Update one OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderSnapshotUpdateArgs>(args: SelectSubset<T, OrderSnapshotUpdateArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderSnapshots.
     * @param {OrderSnapshotDeleteManyArgs} args - Arguments to filter OrderSnapshots to delete.
     * @example
     * // Delete a few OrderSnapshots
     * const { count } = await prisma.orderSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderSnapshotDeleteManyArgs>(args?: SelectSubset<T, OrderSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderSnapshotUpdateManyArgs>(args: SelectSubset<T, OrderSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderSnapshots and returns the data updated in the database.
     * @param {OrderSnapshotUpdateManyAndReturnArgs} args - Arguments to update many OrderSnapshots.
     * @example
     * // Update many OrderSnapshots
     * const orderSnapshot = await prisma.orderSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderSnapshots and only return the `id`
     * const orderSnapshotWithIdOnly = await prisma.orderSnapshot.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderSnapshot.
     * @param {OrderSnapshotUpsertArgs} args - Arguments to update or create a OrderSnapshot.
     * @example
     * // Update or create a OrderSnapshot
     * const orderSnapshot = await prisma.orderSnapshot.upsert({
     *   create: {
     *     // ... data to create a OrderSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends OrderSnapshotUpsertArgs>(args: SelectSubset<T, OrderSnapshotUpsertArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotCountArgs} args - Arguments to filter OrderSnapshots to count.
     * @example
     * // Count the number of OrderSnapshots
     * const count = await prisma.orderSnapshot.count({
     *   where: {
     *     // ... the filter for the OrderSnapshots we want to count
     *   }
     * })
    **/
    count<T extends OrderSnapshotCountArgs>(
      args?: Subset<T, OrderSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderSnapshotAggregateArgs>(args: Subset<T, OrderSnapshotAggregateArgs>): Prisma.PrismaPromise<GetOrderSnapshotAggregateType<T>>

    /**
     * Group by OrderSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderSnapshotGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: OrderSnapshotGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderSnapshot model
   */
  readonly fields: OrderSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exceptionTickets<T extends OrderSnapshot$exceptionTicketsArgs<ExtArgs> = {}>(args?: Subset<T, OrderSnapshot$exceptionTicketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scanRecords<T extends OrderSnapshot$scanRecordsArgs<ExtArgs> = {}>(args?: Subset<T, OrderSnapshot$scanRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderSnapshot model
   */
  interface OrderSnapshotFieldRefs {
    readonly id: FieldRef<"OrderSnapshot", 'String'>
    readonly v2OrderId: FieldRef<"OrderSnapshot", 'String'>
    readonly externalCode: FieldRef<"OrderSnapshot", 'String'>
    readonly storeName: FieldRef<"OrderSnapshot", 'String'>
    readonly receiverName: FieldRef<"OrderSnapshot", 'String'>
    readonly receiverPhone: FieldRef<"OrderSnapshot", 'String'>
    readonly receiverAddress: FieldRef<"OrderSnapshot", 'String'>
    readonly amount: FieldRef<"OrderSnapshot", 'Float'>
    readonly itemsJson: FieldRef<"OrderSnapshot", 'Json'>
    readonly syncedAt: FieldRef<"OrderSnapshot", 'DateTime'>
    readonly createdAt: FieldRef<"OrderSnapshot", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderSnapshot findUnique
   */
  export type OrderSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot findUniqueOrThrow
   */
  export type OrderSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot findFirst
   */
  export type OrderSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSnapshots.
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSnapshots.
     */
    distinct?: OrderSnapshotScalarFieldEnum | OrderSnapshotScalarFieldEnum[]
  }

  /**
   * OrderSnapshot findFirstOrThrow
   */
  export type OrderSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OrderSnapshot to fetch.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderSnapshots.
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderSnapshots.
     */
    distinct?: OrderSnapshotScalarFieldEnum | OrderSnapshotScalarFieldEnum[]
  }

  /**
   * OrderSnapshot findMany
   */
  export type OrderSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which OrderSnapshots to fetch.
     */
    where?: OrderSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderSnapshots to fetch.
     */
    orderBy?: OrderSnapshotOrderByWithRelationInput | OrderSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderSnapshots.
     */
    cursor?: OrderSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderSnapshots.
     */
    skip?: number
    distinct?: OrderSnapshotScalarFieldEnum | OrderSnapshotScalarFieldEnum[]
  }

  /**
   * OrderSnapshot create
   */
  export type OrderSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderSnapshot.
     */
    data: XOR<OrderSnapshotCreateInput, OrderSnapshotUncheckedCreateInput>
  }

  /**
   * OrderSnapshot createMany
   */
  export type OrderSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderSnapshots.
     */
    data: OrderSnapshotCreateManyInput | OrderSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderSnapshot createManyAndReturn
   */
  export type OrderSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many OrderSnapshots.
     */
    data: OrderSnapshotCreateManyInput | OrderSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderSnapshot update
   */
  export type OrderSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderSnapshot.
     */
    data: XOR<OrderSnapshotUpdateInput, OrderSnapshotUncheckedUpdateInput>
    /**
     * Choose, which OrderSnapshot to update.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot updateMany
   */
  export type OrderSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderSnapshots.
     */
    data: XOR<OrderSnapshotUpdateManyMutationInput, OrderSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which OrderSnapshots to update
     */
    where?: OrderSnapshotWhereInput
    /**
     * Limit how many OrderSnapshots to update.
     */
    limit?: number
  }

  /**
   * OrderSnapshot updateManyAndReturn
   */
  export type OrderSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update OrderSnapshots.
     */
    data: XOR<OrderSnapshotUpdateManyMutationInput, OrderSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which OrderSnapshots to update
     */
    where?: OrderSnapshotWhereInput
    /**
     * Limit how many OrderSnapshots to update.
     */
    limit?: number
  }

  /**
   * OrderSnapshot upsert
   */
  export type OrderSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderSnapshot to update in case it exists.
     */
    where: OrderSnapshotWhereUniqueInput
    /**
     * In case the OrderSnapshot found by the `where` argument doesn't exist, create a new OrderSnapshot with this data.
     */
    create: XOR<OrderSnapshotCreateInput, OrderSnapshotUncheckedCreateInput>
    /**
     * In case the OrderSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderSnapshotUpdateInput, OrderSnapshotUncheckedUpdateInput>
  }

  /**
   * OrderSnapshot delete
   */
  export type OrderSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
    /**
     * Filter which OrderSnapshot to delete.
     */
    where: OrderSnapshotWhereUniqueInput
  }

  /**
   * OrderSnapshot deleteMany
   */
  export type OrderSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderSnapshots to delete
     */
    where?: OrderSnapshotWhereInput
    /**
     * Limit how many OrderSnapshots to delete.
     */
    limit?: number
  }

  /**
   * OrderSnapshot.exceptionTickets
   */
  export type OrderSnapshot$exceptionTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    where?: ExceptionTicketWhereInput
    orderBy?: ExceptionTicketOrderByWithRelationInput | ExceptionTicketOrderByWithRelationInput[]
    cursor?: ExceptionTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExceptionTicketScalarFieldEnum | ExceptionTicketScalarFieldEnum[]
  }

  /**
   * OrderSnapshot.scanRecords
   */
  export type OrderSnapshot$scanRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    where?: ScanRecordWhereInput
    orderBy?: ScanRecordOrderByWithRelationInput | ScanRecordOrderByWithRelationInput[]
    cursor?: ScanRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanRecordScalarFieldEnum | ScanRecordScalarFieldEnum[]
  }

  /**
   * OrderSnapshot without action
   */
  export type OrderSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderSnapshot
     */
    select?: OrderSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderSnapshot
     */
    omit?: OrderSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model SyncLog
   */

  export type AggregateSyncLog = {
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  export type SyncLogAvgAggregateOutputType = {
    responseStatus: number | null
    duration: number | null
  }

  export type SyncLogSumAggregateOutputType = {
    responseStatus: number | null
    duration: number | null
  }

  export type SyncLogMinAggregateOutputType = {
    id: string | null
    apiName: string | null
    responseStatus: number | null
    responseBody: string | null
    status: string | null
    errorMessage: string | null
    duration: number | null
    createdAt: Date | null
  }

  export type SyncLogMaxAggregateOutputType = {
    id: string | null
    apiName: string | null
    responseStatus: number | null
    responseBody: string | null
    status: string | null
    errorMessage: string | null
    duration: number | null
    createdAt: Date | null
  }

  export type SyncLogCountAggregateOutputType = {
    id: number
    apiName: number
    requestParams: number
    responseStatus: number
    responseBody: number
    status: number
    errorMessage: number
    duration: number
    createdAt: number
    _all: number
  }


  export type SyncLogAvgAggregateInputType = {
    responseStatus?: true
    duration?: true
  }

  export type SyncLogSumAggregateInputType = {
    responseStatus?: true
    duration?: true
  }

  export type SyncLogMinAggregateInputType = {
    id?: true
    apiName?: true
    responseStatus?: true
    responseBody?: true
    status?: true
    errorMessage?: true
    duration?: true
    createdAt?: true
  }

  export type SyncLogMaxAggregateInputType = {
    id?: true
    apiName?: true
    responseStatus?: true
    responseBody?: true
    status?: true
    errorMessage?: true
    duration?: true
    createdAt?: true
  }

  export type SyncLogCountAggregateInputType = {
    id?: true
    apiName?: true
    requestParams?: true
    responseStatus?: true
    responseBody?: true
    status?: true
    errorMessage?: true
    duration?: true
    createdAt?: true
    _all?: true
  }

  export type SyncLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLog to aggregate.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SyncLogs
    **/
    _count?: true | SyncLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SyncLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SyncLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SyncLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SyncLogMaxAggregateInputType
  }

  export type GetSyncLogAggregateType<T extends SyncLogAggregateArgs> = {
        [P in keyof T & keyof AggregateSyncLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSyncLog[P]>
      : GetScalarType<T[P], AggregateSyncLog[P]>
  }




  export type SyncLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SyncLogWhereInput
    orderBy?: SyncLogOrderByWithAggregationInput | SyncLogOrderByWithAggregationInput[]
    by: SyncLogScalarFieldEnum[] | SyncLogScalarFieldEnum
    having?: SyncLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SyncLogCountAggregateInputType | true
    _avg?: SyncLogAvgAggregateInputType
    _sum?: SyncLogSumAggregateInputType
    _min?: SyncLogMinAggregateInputType
    _max?: SyncLogMaxAggregateInputType
  }

  export type SyncLogGroupByOutputType = {
    id: string
    apiName: string
    requestParams: JsonValue
    responseStatus: number
    responseBody: string | null
    status: string
    errorMessage: string | null
    duration: number
    createdAt: Date
    _count: SyncLogCountAggregateOutputType | null
    _avg: SyncLogAvgAggregateOutputType | null
    _sum: SyncLogSumAggregateOutputType | null
    _min: SyncLogMinAggregateOutputType | null
    _max: SyncLogMaxAggregateOutputType | null
  }

  type GetSyncLogGroupByPayload<T extends SyncLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SyncLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SyncLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
            : GetScalarType<T[P], SyncLogGroupByOutputType[P]>
        }
      >
    >


  export type SyncLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiName?: boolean
    requestParams?: boolean
    responseStatus?: boolean
    responseBody?: boolean
    status?: boolean
    errorMessage?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiName?: boolean
    requestParams?: boolean
    responseStatus?: boolean
    responseBody?: boolean
    status?: boolean
    errorMessage?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    apiName?: boolean
    requestParams?: boolean
    responseStatus?: boolean
    responseBody?: boolean
    status?: boolean
    errorMessage?: boolean
    duration?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["syncLog"]>

  export type SyncLogSelectScalar = {
    id?: boolean
    apiName?: boolean
    requestParams?: boolean
    responseStatus?: boolean
    responseBody?: boolean
    status?: boolean
    errorMessage?: boolean
    duration?: boolean
    createdAt?: boolean
  }

  export type SyncLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "apiName" | "requestParams" | "responseStatus" | "responseBody" | "status" | "errorMessage" | "duration" | "createdAt", ExtArgs["result"]["syncLog"]>

  export type $SyncLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SyncLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      apiName: string
      requestParams: Prisma.JsonValue
      responseStatus: number
      responseBody: string | null
      status: string
      errorMessage: string | null
      duration: number
      createdAt: Date
    }, ExtArgs["result"]["syncLog"]>
    composites: {}
  }

  type SyncLogGetPayload<S extends boolean | null | undefined | SyncLogDefaultArgs> = $Result.GetResult<Prisma.$SyncLogPayload, S>

  type SyncLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SyncLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SyncLogCountAggregateInputType | true
    }

  export interface SyncLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SyncLog'], meta: { name: 'SyncLog' } }
    /**
     * Find zero or one SyncLog that matches the filter.
     * @param {SyncLogFindUniqueArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SyncLogFindUniqueArgs>(args: SelectSubset<T, SyncLogFindUniqueArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SyncLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SyncLogFindUniqueOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SyncLogFindUniqueOrThrowArgs>(args: SelectSubset<T, SyncLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SyncLogFindFirstArgs>(args?: SelectSubset<T, SyncLogFindFirstArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SyncLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindFirstOrThrowArgs} args - Arguments to find a SyncLog
     * @example
     * // Get one SyncLog
     * const syncLog = await prisma.syncLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SyncLogFindFirstOrThrowArgs>(args?: SelectSubset<T, SyncLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SyncLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SyncLogs
     * const syncLogs = await prisma.syncLog.findMany()
     * 
     * // Get first 10 SyncLogs
     * const syncLogs = await prisma.syncLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SyncLogFindManyArgs>(args?: SelectSubset<T, SyncLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SyncLog.
     * @param {SyncLogCreateArgs} args - Arguments to create a SyncLog.
     * @example
     * // Create one SyncLog
     * const SyncLog = await prisma.syncLog.create({
     *   data: {
     *     // ... data to create a SyncLog
     *   }
     * })
     * 
     */
    create<T extends SyncLogCreateArgs>(args: SelectSubset<T, SyncLogCreateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SyncLogs.
     * @param {SyncLogCreateManyArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SyncLogCreateManyArgs>(args?: SelectSubset<T, SyncLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SyncLogs and returns the data saved in the database.
     * @param {SyncLogCreateManyAndReturnArgs} args - Arguments to create many SyncLogs.
     * @example
     * // Create many SyncLogs
     * const syncLog = await prisma.syncLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SyncLogCreateManyAndReturnArgs>(args?: SelectSubset<T, SyncLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SyncLog.
     * @param {SyncLogDeleteArgs} args - Arguments to delete one SyncLog.
     * @example
     * // Delete one SyncLog
     * const SyncLog = await prisma.syncLog.delete({
     *   where: {
     *     // ... filter to delete one SyncLog
     *   }
     * })
     * 
     */
    delete<T extends SyncLogDeleteArgs>(args: SelectSubset<T, SyncLogDeleteArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SyncLog.
     * @param {SyncLogUpdateArgs} args - Arguments to update one SyncLog.
     * @example
     * // Update one SyncLog
     * const syncLog = await prisma.syncLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SyncLogUpdateArgs>(args: SelectSubset<T, SyncLogUpdateArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SyncLogs.
     * @param {SyncLogDeleteManyArgs} args - Arguments to filter SyncLogs to delete.
     * @example
     * // Delete a few SyncLogs
     * const { count } = await prisma.syncLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SyncLogDeleteManyArgs>(args?: SelectSubset<T, SyncLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SyncLogUpdateManyArgs>(args: SelectSubset<T, SyncLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SyncLogs and returns the data updated in the database.
     * @param {SyncLogUpdateManyAndReturnArgs} args - Arguments to update many SyncLogs.
     * @example
     * // Update many SyncLogs
     * const syncLog = await prisma.syncLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SyncLogs and only return the `id`
     * const syncLogWithIdOnly = await prisma.syncLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SyncLogUpdateManyAndReturnArgs>(args: SelectSubset<T, SyncLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SyncLog.
     * @param {SyncLogUpsertArgs} args - Arguments to update or create a SyncLog.
     * @example
     * // Update or create a SyncLog
     * const syncLog = await prisma.syncLog.upsert({
     *   create: {
     *     // ... data to create a SyncLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SyncLog we want to update
     *   }
     * })
     */
    upsert<T extends SyncLogUpsertArgs>(args: SelectSubset<T, SyncLogUpsertArgs<ExtArgs>>): Prisma__SyncLogClient<$Result.GetResult<Prisma.$SyncLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SyncLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogCountArgs} args - Arguments to filter SyncLogs to count.
     * @example
     * // Count the number of SyncLogs
     * const count = await prisma.syncLog.count({
     *   where: {
     *     // ... the filter for the SyncLogs we want to count
     *   }
     * })
    **/
    count<T extends SyncLogCountArgs>(
      args?: Subset<T, SyncLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SyncLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SyncLogAggregateArgs>(args: Subset<T, SyncLogAggregateArgs>): Prisma.PrismaPromise<GetSyncLogAggregateType<T>>

    /**
     * Group by SyncLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SyncLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SyncLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SyncLogGroupByArgs['orderBy'] }
        : { orderBy?: SyncLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SyncLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSyncLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SyncLog model
   */
  readonly fields: SyncLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SyncLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SyncLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SyncLog model
   */
  interface SyncLogFieldRefs {
    readonly id: FieldRef<"SyncLog", 'String'>
    readonly apiName: FieldRef<"SyncLog", 'String'>
    readonly requestParams: FieldRef<"SyncLog", 'Json'>
    readonly responseStatus: FieldRef<"SyncLog", 'Int'>
    readonly responseBody: FieldRef<"SyncLog", 'String'>
    readonly status: FieldRef<"SyncLog", 'String'>
    readonly errorMessage: FieldRef<"SyncLog", 'String'>
    readonly duration: FieldRef<"SyncLog", 'Int'>
    readonly createdAt: FieldRef<"SyncLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SyncLog findUnique
   */
  export type SyncLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findUniqueOrThrow
   */
  export type SyncLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog findFirst
   */
  export type SyncLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findFirstOrThrow
   */
  export type SyncLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLog to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SyncLogs.
     */
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog findMany
   */
  export type SyncLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter, which SyncLogs to fetch.
     */
    where?: SyncLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SyncLogs to fetch.
     */
    orderBy?: SyncLogOrderByWithRelationInput | SyncLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SyncLogs.
     */
    cursor?: SyncLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SyncLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SyncLogs.
     */
    skip?: number
    distinct?: SyncLogScalarFieldEnum | SyncLogScalarFieldEnum[]
  }

  /**
   * SyncLog create
   */
  export type SyncLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to create a SyncLog.
     */
    data: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
  }

  /**
   * SyncLog createMany
   */
  export type SyncLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog createManyAndReturn
   */
  export type SyncLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to create many SyncLogs.
     */
    data: SyncLogCreateManyInput | SyncLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SyncLog update
   */
  export type SyncLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data needed to update a SyncLog.
     */
    data: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
    /**
     * Choose, which SyncLog to update.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog updateMany
   */
  export type SyncLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog updateManyAndReturn
   */
  export type SyncLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The data used to update SyncLogs.
     */
    data: XOR<SyncLogUpdateManyMutationInput, SyncLogUncheckedUpdateManyInput>
    /**
     * Filter which SyncLogs to update
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to update.
     */
    limit?: number
  }

  /**
   * SyncLog upsert
   */
  export type SyncLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * The filter to search for the SyncLog to update in case it exists.
     */
    where: SyncLogWhereUniqueInput
    /**
     * In case the SyncLog found by the `where` argument doesn't exist, create a new SyncLog with this data.
     */
    create: XOR<SyncLogCreateInput, SyncLogUncheckedCreateInput>
    /**
     * In case the SyncLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SyncLogUpdateInput, SyncLogUncheckedUpdateInput>
  }

  /**
   * SyncLog delete
   */
  export type SyncLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
    /**
     * Filter which SyncLog to delete.
     */
    where: SyncLogWhereUniqueInput
  }

  /**
   * SyncLog deleteMany
   */
  export type SyncLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SyncLogs to delete
     */
    where?: SyncLogWhereInput
    /**
     * Limit how many SyncLogs to delete.
     */
    limit?: number
  }

  /**
   * SyncLog without action
   */
  export type SyncLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SyncLog
     */
    select?: SyncLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SyncLog
     */
    omit?: SyncLogOmit<ExtArgs> | null
  }


  /**
   * Model ScanRecord
   */

  export type AggregateScanRecord = {
    _count: ScanRecordCountAggregateOutputType | null
    _avg: ScanRecordAvgAggregateOutputType | null
    _sum: ScanRecordSumAggregateOutputType | null
    _min: ScanRecordMinAggregateOutputType | null
    _max: ScanRecordMaxAggregateOutputType | null
  }

  export type ScanRecordAvgAggregateOutputType = {
    scannedQuantity: number | null
  }

  export type ScanRecordSumAggregateOutputType = {
    scannedQuantity: number | null
  }

  export type ScanRecordMinAggregateOutputType = {
    id: string | null
    scanId: string | null
    orderSnapshotId: string | null
    skuCode: string | null
    skuName: string | null
    scannedQuantity: number | null
    scanTime: Date | null
    operator: string | null
    deviceId: string | null
    qcResult: string | null
    qcRuleId: string | null
    qcRuleName: string | null
    qcDescription: string | null
    batchStatus: string | null
    ticketId: string | null
    createdAt: Date | null
  }

  export type ScanRecordMaxAggregateOutputType = {
    id: string | null
    scanId: string | null
    orderSnapshotId: string | null
    skuCode: string | null
    skuName: string | null
    scannedQuantity: number | null
    scanTime: Date | null
    operator: string | null
    deviceId: string | null
    qcResult: string | null
    qcRuleId: string | null
    qcRuleName: string | null
    qcDescription: string | null
    batchStatus: string | null
    ticketId: string | null
    createdAt: Date | null
  }

  export type ScanRecordCountAggregateOutputType = {
    id: number
    scanId: number
    orderSnapshotId: number
    skuCode: number
    skuName: number
    scannedQuantity: number
    scanTime: number
    operator: number
    deviceId: number
    qcResult: number
    qcRuleId: number
    qcRuleName: number
    qcDescription: number
    batchStatus: number
    ticketId: number
    createdAt: number
    _all: number
  }


  export type ScanRecordAvgAggregateInputType = {
    scannedQuantity?: true
  }

  export type ScanRecordSumAggregateInputType = {
    scannedQuantity?: true
  }

  export type ScanRecordMinAggregateInputType = {
    id?: true
    scanId?: true
    orderSnapshotId?: true
    skuCode?: true
    skuName?: true
    scannedQuantity?: true
    scanTime?: true
    operator?: true
    deviceId?: true
    qcResult?: true
    qcRuleId?: true
    qcRuleName?: true
    qcDescription?: true
    batchStatus?: true
    ticketId?: true
    createdAt?: true
  }

  export type ScanRecordMaxAggregateInputType = {
    id?: true
    scanId?: true
    orderSnapshotId?: true
    skuCode?: true
    skuName?: true
    scannedQuantity?: true
    scanTime?: true
    operator?: true
    deviceId?: true
    qcResult?: true
    qcRuleId?: true
    qcRuleName?: true
    qcDescription?: true
    batchStatus?: true
    ticketId?: true
    createdAt?: true
  }

  export type ScanRecordCountAggregateInputType = {
    id?: true
    scanId?: true
    orderSnapshotId?: true
    skuCode?: true
    skuName?: true
    scannedQuantity?: true
    scanTime?: true
    operator?: true
    deviceId?: true
    qcResult?: true
    qcRuleId?: true
    qcRuleName?: true
    qcDescription?: true
    batchStatus?: true
    ticketId?: true
    createdAt?: true
    _all?: true
  }

  export type ScanRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanRecord to aggregate.
     */
    where?: ScanRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanRecords to fetch.
     */
    orderBy?: ScanRecordOrderByWithRelationInput | ScanRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScanRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScanRecords
    **/
    _count?: true | ScanRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScanRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScanRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScanRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScanRecordMaxAggregateInputType
  }

  export type GetScanRecordAggregateType<T extends ScanRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateScanRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScanRecord[P]>
      : GetScalarType<T[P], AggregateScanRecord[P]>
  }




  export type ScanRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScanRecordWhereInput
    orderBy?: ScanRecordOrderByWithAggregationInput | ScanRecordOrderByWithAggregationInput[]
    by: ScanRecordScalarFieldEnum[] | ScanRecordScalarFieldEnum
    having?: ScanRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScanRecordCountAggregateInputType | true
    _avg?: ScanRecordAvgAggregateInputType
    _sum?: ScanRecordSumAggregateInputType
    _min?: ScanRecordMinAggregateInputType
    _max?: ScanRecordMaxAggregateInputType
  }

  export type ScanRecordGroupByOutputType = {
    id: string
    scanId: string
    orderSnapshotId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime: Date
    operator: string
    deviceId: string | null
    qcResult: string
    qcRuleId: string | null
    qcRuleName: string | null
    qcDescription: string | null
    batchStatus: string
    ticketId: string | null
    createdAt: Date
    _count: ScanRecordCountAggregateOutputType | null
    _avg: ScanRecordAvgAggregateOutputType | null
    _sum: ScanRecordSumAggregateOutputType | null
    _min: ScanRecordMinAggregateOutputType | null
    _max: ScanRecordMaxAggregateOutputType | null
  }

  type GetScanRecordGroupByPayload<T extends ScanRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScanRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScanRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScanRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ScanRecordGroupByOutputType[P]>
        }
      >
    >


  export type ScanRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    orderSnapshotId?: boolean
    skuCode?: boolean
    skuName?: boolean
    scannedQuantity?: boolean
    scanTime?: boolean
    operator?: boolean
    deviceId?: boolean
    qcResult?: boolean
    qcRuleId?: boolean
    qcRuleName?: boolean
    qcDescription?: boolean
    batchStatus?: boolean
    ticketId?: boolean
    createdAt?: boolean
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    ticket?: boolean | ScanRecord$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["scanRecord"]>

  export type ScanRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    orderSnapshotId?: boolean
    skuCode?: boolean
    skuName?: boolean
    scannedQuantity?: boolean
    scanTime?: boolean
    operator?: boolean
    deviceId?: boolean
    qcResult?: boolean
    qcRuleId?: boolean
    qcRuleName?: boolean
    qcDescription?: boolean
    batchStatus?: boolean
    ticketId?: boolean
    createdAt?: boolean
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    ticket?: boolean | ScanRecord$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["scanRecord"]>

  export type ScanRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    orderSnapshotId?: boolean
    skuCode?: boolean
    skuName?: boolean
    scannedQuantity?: boolean
    scanTime?: boolean
    operator?: boolean
    deviceId?: boolean
    qcResult?: boolean
    qcRuleId?: boolean
    qcRuleName?: boolean
    qcDescription?: boolean
    batchStatus?: boolean
    ticketId?: boolean
    createdAt?: boolean
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    ticket?: boolean | ScanRecord$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["scanRecord"]>

  export type ScanRecordSelectScalar = {
    id?: boolean
    scanId?: boolean
    orderSnapshotId?: boolean
    skuCode?: boolean
    skuName?: boolean
    scannedQuantity?: boolean
    scanTime?: boolean
    operator?: boolean
    deviceId?: boolean
    qcResult?: boolean
    qcRuleId?: boolean
    qcRuleName?: boolean
    qcDescription?: boolean
    batchStatus?: boolean
    ticketId?: boolean
    createdAt?: boolean
  }

  export type ScanRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "orderSnapshotId" | "skuCode" | "skuName" | "scannedQuantity" | "scanTime" | "operator" | "deviceId" | "qcResult" | "qcRuleId" | "qcRuleName" | "qcDescription" | "batchStatus" | "ticketId" | "createdAt", ExtArgs["result"]["scanRecord"]>
  export type ScanRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    ticket?: boolean | ScanRecord$ticketArgs<ExtArgs>
  }
  export type ScanRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    ticket?: boolean | ScanRecord$ticketArgs<ExtArgs>
  }
  export type ScanRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    ticket?: boolean | ScanRecord$ticketArgs<ExtArgs>
  }

  export type $ScanRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScanRecord"
    objects: {
      orderSnapshot: Prisma.$OrderSnapshotPayload<ExtArgs>
      ticket: Prisma.$ExceptionTicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      scanId: string
      orderSnapshotId: string
      skuCode: string
      skuName: string
      scannedQuantity: number
      scanTime: Date
      operator: string
      deviceId: string | null
      qcResult: string
      qcRuleId: string | null
      qcRuleName: string | null
      qcDescription: string | null
      batchStatus: string
      ticketId: string | null
      createdAt: Date
    }, ExtArgs["result"]["scanRecord"]>
    composites: {}
  }

  type ScanRecordGetPayload<S extends boolean | null | undefined | ScanRecordDefaultArgs> = $Result.GetResult<Prisma.$ScanRecordPayload, S>

  type ScanRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScanRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScanRecordCountAggregateInputType | true
    }

  export interface ScanRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScanRecord'], meta: { name: 'ScanRecord' } }
    /**
     * Find zero or one ScanRecord that matches the filter.
     * @param {ScanRecordFindUniqueArgs} args - Arguments to find a ScanRecord
     * @example
     * // Get one ScanRecord
     * const scanRecord = await prisma.scanRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScanRecordFindUniqueArgs>(args: SelectSubset<T, ScanRecordFindUniqueArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScanRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScanRecordFindUniqueOrThrowArgs} args - Arguments to find a ScanRecord
     * @example
     * // Get one ScanRecord
     * const scanRecord = await prisma.scanRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScanRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ScanRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordFindFirstArgs} args - Arguments to find a ScanRecord
     * @example
     * // Get one ScanRecord
     * const scanRecord = await prisma.scanRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScanRecordFindFirstArgs>(args?: SelectSubset<T, ScanRecordFindFirstArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScanRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordFindFirstOrThrowArgs} args - Arguments to find a ScanRecord
     * @example
     * // Get one ScanRecord
     * const scanRecord = await prisma.scanRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScanRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ScanRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScanRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScanRecords
     * const scanRecords = await prisma.scanRecord.findMany()
     * 
     * // Get first 10 ScanRecords
     * const scanRecords = await prisma.scanRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scanRecordWithIdOnly = await prisma.scanRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScanRecordFindManyArgs>(args?: SelectSubset<T, ScanRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScanRecord.
     * @param {ScanRecordCreateArgs} args - Arguments to create a ScanRecord.
     * @example
     * // Create one ScanRecord
     * const ScanRecord = await prisma.scanRecord.create({
     *   data: {
     *     // ... data to create a ScanRecord
     *   }
     * })
     * 
     */
    create<T extends ScanRecordCreateArgs>(args: SelectSubset<T, ScanRecordCreateArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScanRecords.
     * @param {ScanRecordCreateManyArgs} args - Arguments to create many ScanRecords.
     * @example
     * // Create many ScanRecords
     * const scanRecord = await prisma.scanRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScanRecordCreateManyArgs>(args?: SelectSubset<T, ScanRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScanRecords and returns the data saved in the database.
     * @param {ScanRecordCreateManyAndReturnArgs} args - Arguments to create many ScanRecords.
     * @example
     * // Create many ScanRecords
     * const scanRecord = await prisma.scanRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScanRecords and only return the `id`
     * const scanRecordWithIdOnly = await prisma.scanRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScanRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ScanRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScanRecord.
     * @param {ScanRecordDeleteArgs} args - Arguments to delete one ScanRecord.
     * @example
     * // Delete one ScanRecord
     * const ScanRecord = await prisma.scanRecord.delete({
     *   where: {
     *     // ... filter to delete one ScanRecord
     *   }
     * })
     * 
     */
    delete<T extends ScanRecordDeleteArgs>(args: SelectSubset<T, ScanRecordDeleteArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScanRecord.
     * @param {ScanRecordUpdateArgs} args - Arguments to update one ScanRecord.
     * @example
     * // Update one ScanRecord
     * const scanRecord = await prisma.scanRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScanRecordUpdateArgs>(args: SelectSubset<T, ScanRecordUpdateArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScanRecords.
     * @param {ScanRecordDeleteManyArgs} args - Arguments to filter ScanRecords to delete.
     * @example
     * // Delete a few ScanRecords
     * const { count } = await prisma.scanRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScanRecordDeleteManyArgs>(args?: SelectSubset<T, ScanRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScanRecords
     * const scanRecord = await prisma.scanRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScanRecordUpdateManyArgs>(args: SelectSubset<T, ScanRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScanRecords and returns the data updated in the database.
     * @param {ScanRecordUpdateManyAndReturnArgs} args - Arguments to update many ScanRecords.
     * @example
     * // Update many ScanRecords
     * const scanRecord = await prisma.scanRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScanRecords and only return the `id`
     * const scanRecordWithIdOnly = await prisma.scanRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScanRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ScanRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScanRecord.
     * @param {ScanRecordUpsertArgs} args - Arguments to update or create a ScanRecord.
     * @example
     * // Update or create a ScanRecord
     * const scanRecord = await prisma.scanRecord.upsert({
     *   create: {
     *     // ... data to create a ScanRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScanRecord we want to update
     *   }
     * })
     */
    upsert<T extends ScanRecordUpsertArgs>(args: SelectSubset<T, ScanRecordUpsertArgs<ExtArgs>>): Prisma__ScanRecordClient<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScanRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordCountArgs} args - Arguments to filter ScanRecords to count.
     * @example
     * // Count the number of ScanRecords
     * const count = await prisma.scanRecord.count({
     *   where: {
     *     // ... the filter for the ScanRecords we want to count
     *   }
     * })
    **/
    count<T extends ScanRecordCountArgs>(
      args?: Subset<T, ScanRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScanRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScanRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScanRecordAggregateArgs>(args: Subset<T, ScanRecordAggregateArgs>): Prisma.PrismaPromise<GetScanRecordAggregateType<T>>

    /**
     * Group by ScanRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScanRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScanRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScanRecordGroupByArgs['orderBy'] }
        : { orderBy?: ScanRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScanRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScanRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScanRecord model
   */
  readonly fields: ScanRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScanRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScanRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderSnapshot<T extends OrderSnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderSnapshotDefaultArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends ScanRecord$ticketArgs<ExtArgs> = {}>(args?: Subset<T, ScanRecord$ticketArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ScanRecord model
   */
  interface ScanRecordFieldRefs {
    readonly id: FieldRef<"ScanRecord", 'String'>
    readonly scanId: FieldRef<"ScanRecord", 'String'>
    readonly orderSnapshotId: FieldRef<"ScanRecord", 'String'>
    readonly skuCode: FieldRef<"ScanRecord", 'String'>
    readonly skuName: FieldRef<"ScanRecord", 'String'>
    readonly scannedQuantity: FieldRef<"ScanRecord", 'Int'>
    readonly scanTime: FieldRef<"ScanRecord", 'DateTime'>
    readonly operator: FieldRef<"ScanRecord", 'String'>
    readonly deviceId: FieldRef<"ScanRecord", 'String'>
    readonly qcResult: FieldRef<"ScanRecord", 'String'>
    readonly qcRuleId: FieldRef<"ScanRecord", 'String'>
    readonly qcRuleName: FieldRef<"ScanRecord", 'String'>
    readonly qcDescription: FieldRef<"ScanRecord", 'String'>
    readonly batchStatus: FieldRef<"ScanRecord", 'String'>
    readonly ticketId: FieldRef<"ScanRecord", 'String'>
    readonly createdAt: FieldRef<"ScanRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScanRecord findUnique
   */
  export type ScanRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * Filter, which ScanRecord to fetch.
     */
    where: ScanRecordWhereUniqueInput
  }

  /**
   * ScanRecord findUniqueOrThrow
   */
  export type ScanRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * Filter, which ScanRecord to fetch.
     */
    where: ScanRecordWhereUniqueInput
  }

  /**
   * ScanRecord findFirst
   */
  export type ScanRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * Filter, which ScanRecord to fetch.
     */
    where?: ScanRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanRecords to fetch.
     */
    orderBy?: ScanRecordOrderByWithRelationInput | ScanRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanRecords.
     */
    cursor?: ScanRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanRecords.
     */
    distinct?: ScanRecordScalarFieldEnum | ScanRecordScalarFieldEnum[]
  }

  /**
   * ScanRecord findFirstOrThrow
   */
  export type ScanRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * Filter, which ScanRecord to fetch.
     */
    where?: ScanRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanRecords to fetch.
     */
    orderBy?: ScanRecordOrderByWithRelationInput | ScanRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScanRecords.
     */
    cursor?: ScanRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScanRecords.
     */
    distinct?: ScanRecordScalarFieldEnum | ScanRecordScalarFieldEnum[]
  }

  /**
   * ScanRecord findMany
   */
  export type ScanRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * Filter, which ScanRecords to fetch.
     */
    where?: ScanRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScanRecords to fetch.
     */
    orderBy?: ScanRecordOrderByWithRelationInput | ScanRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScanRecords.
     */
    cursor?: ScanRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScanRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScanRecords.
     */
    skip?: number
    distinct?: ScanRecordScalarFieldEnum | ScanRecordScalarFieldEnum[]
  }

  /**
   * ScanRecord create
   */
  export type ScanRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ScanRecord.
     */
    data: XOR<ScanRecordCreateInput, ScanRecordUncheckedCreateInput>
  }

  /**
   * ScanRecord createMany
   */
  export type ScanRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScanRecords.
     */
    data: ScanRecordCreateManyInput | ScanRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScanRecord createManyAndReturn
   */
  export type ScanRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ScanRecords.
     */
    data: ScanRecordCreateManyInput | ScanRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanRecord update
   */
  export type ScanRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ScanRecord.
     */
    data: XOR<ScanRecordUpdateInput, ScanRecordUncheckedUpdateInput>
    /**
     * Choose, which ScanRecord to update.
     */
    where: ScanRecordWhereUniqueInput
  }

  /**
   * ScanRecord updateMany
   */
  export type ScanRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScanRecords.
     */
    data: XOR<ScanRecordUpdateManyMutationInput, ScanRecordUncheckedUpdateManyInput>
    /**
     * Filter which ScanRecords to update
     */
    where?: ScanRecordWhereInput
    /**
     * Limit how many ScanRecords to update.
     */
    limit?: number
  }

  /**
   * ScanRecord updateManyAndReturn
   */
  export type ScanRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * The data used to update ScanRecords.
     */
    data: XOR<ScanRecordUpdateManyMutationInput, ScanRecordUncheckedUpdateManyInput>
    /**
     * Filter which ScanRecords to update
     */
    where?: ScanRecordWhereInput
    /**
     * Limit how many ScanRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ScanRecord upsert
   */
  export type ScanRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ScanRecord to update in case it exists.
     */
    where: ScanRecordWhereUniqueInput
    /**
     * In case the ScanRecord found by the `where` argument doesn't exist, create a new ScanRecord with this data.
     */
    create: XOR<ScanRecordCreateInput, ScanRecordUncheckedCreateInput>
    /**
     * In case the ScanRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScanRecordUpdateInput, ScanRecordUncheckedUpdateInput>
  }

  /**
   * ScanRecord delete
   */
  export type ScanRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    /**
     * Filter which ScanRecord to delete.
     */
    where: ScanRecordWhereUniqueInput
  }

  /**
   * ScanRecord deleteMany
   */
  export type ScanRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScanRecords to delete
     */
    where?: ScanRecordWhereInput
    /**
     * Limit how many ScanRecords to delete.
     */
    limit?: number
  }

  /**
   * ScanRecord.ticket
   */
  export type ScanRecord$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    where?: ExceptionTicketWhereInput
  }

  /**
   * ScanRecord without action
   */
  export type ScanRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
  }


  /**
   * Model ExceptionTicket
   */

  export type AggregateExceptionTicket = {
    _count: ExceptionTicketCountAggregateOutputType | null
    _avg: ExceptionTicketAvgAggregateOutputType | null
    _sum: ExceptionTicketSumAggregateOutputType | null
    _min: ExceptionTicketMinAggregateOutputType | null
    _max: ExceptionTicketMaxAggregateOutputType | null
  }

  export type ExceptionTicketAvgAggregateOutputType = {
    currentApprovalLevel: number | null
    resubmitCount: number | null
    maxResubmitCount: number | null
  }

  export type ExceptionTicketSumAggregateOutputType = {
    currentApprovalLevel: number | null
    resubmitCount: number | null
    maxResubmitCount: number | null
  }

  export type ExceptionTicketMinAggregateOutputType = {
    id: string | null
    ticketNo: string | null
    orderSnapshotId: string | null
    exceptionType: string | null
    source: string | null
    category: string | null
    description: string | null
    status: string | null
    priority: string | null
    currentApprovalLevel: number | null
    resubmitCount: number | null
    maxResubmitCount: number | null
    submittedBy: string | null
    submittedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExceptionTicketMaxAggregateOutputType = {
    id: string | null
    ticketNo: string | null
    orderSnapshotId: string | null
    exceptionType: string | null
    source: string | null
    category: string | null
    description: string | null
    status: string | null
    priority: string | null
    currentApprovalLevel: number | null
    resubmitCount: number | null
    maxResubmitCount: number | null
    submittedBy: string | null
    submittedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExceptionTicketCountAggregateOutputType = {
    id: number
    ticketNo: number
    orderSnapshotId: number
    exceptionType: number
    source: number
    category: number
    description: number
    status: number
    priority: number
    currentApprovalLevel: number
    resubmitCount: number
    maxResubmitCount: number
    submittedBy: number
    submittedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExceptionTicketAvgAggregateInputType = {
    currentApprovalLevel?: true
    resubmitCount?: true
    maxResubmitCount?: true
  }

  export type ExceptionTicketSumAggregateInputType = {
    currentApprovalLevel?: true
    resubmitCount?: true
    maxResubmitCount?: true
  }

  export type ExceptionTicketMinAggregateInputType = {
    id?: true
    ticketNo?: true
    orderSnapshotId?: true
    exceptionType?: true
    source?: true
    category?: true
    description?: true
    status?: true
    priority?: true
    currentApprovalLevel?: true
    resubmitCount?: true
    maxResubmitCount?: true
    submittedBy?: true
    submittedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExceptionTicketMaxAggregateInputType = {
    id?: true
    ticketNo?: true
    orderSnapshotId?: true
    exceptionType?: true
    source?: true
    category?: true
    description?: true
    status?: true
    priority?: true
    currentApprovalLevel?: true
    resubmitCount?: true
    maxResubmitCount?: true
    submittedBy?: true
    submittedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExceptionTicketCountAggregateInputType = {
    id?: true
    ticketNo?: true
    orderSnapshotId?: true
    exceptionType?: true
    source?: true
    category?: true
    description?: true
    status?: true
    priority?: true
    currentApprovalLevel?: true
    resubmitCount?: true
    maxResubmitCount?: true
    submittedBy?: true
    submittedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExceptionTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExceptionTicket to aggregate.
     */
    where?: ExceptionTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionTickets to fetch.
     */
    orderBy?: ExceptionTicketOrderByWithRelationInput | ExceptionTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExceptionTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExceptionTickets
    **/
    _count?: true | ExceptionTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExceptionTicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExceptionTicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExceptionTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExceptionTicketMaxAggregateInputType
  }

  export type GetExceptionTicketAggregateType<T extends ExceptionTicketAggregateArgs> = {
        [P in keyof T & keyof AggregateExceptionTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExceptionTicket[P]>
      : GetScalarType<T[P], AggregateExceptionTicket[P]>
  }




  export type ExceptionTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExceptionTicketWhereInput
    orderBy?: ExceptionTicketOrderByWithAggregationInput | ExceptionTicketOrderByWithAggregationInput[]
    by: ExceptionTicketScalarFieldEnum[] | ExceptionTicketScalarFieldEnum
    having?: ExceptionTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExceptionTicketCountAggregateInputType | true
    _avg?: ExceptionTicketAvgAggregateInputType
    _sum?: ExceptionTicketSumAggregateInputType
    _min?: ExceptionTicketMinAggregateInputType
    _max?: ExceptionTicketMaxAggregateInputType
  }

  export type ExceptionTicketGroupByOutputType = {
    id: string
    ticketNo: string
    orderSnapshotId: string
    exceptionType: string
    source: string
    category: string
    description: string
    status: string
    priority: string
    currentApprovalLevel: number
    resubmitCount: number
    maxResubmitCount: number
    submittedBy: string
    submittedAt: Date
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ExceptionTicketCountAggregateOutputType | null
    _avg: ExceptionTicketAvgAggregateOutputType | null
    _sum: ExceptionTicketSumAggregateOutputType | null
    _min: ExceptionTicketMinAggregateOutputType | null
    _max: ExceptionTicketMaxAggregateOutputType | null
  }

  type GetExceptionTicketGroupByPayload<T extends ExceptionTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExceptionTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExceptionTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExceptionTicketGroupByOutputType[P]>
            : GetScalarType<T[P], ExceptionTicketGroupByOutputType[P]>
        }
      >
    >


  export type ExceptionTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNo?: boolean
    orderSnapshotId?: boolean
    exceptionType?: boolean
    source?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    currentApprovalLevel?: boolean
    resubmitCount?: boolean
    maxResubmitCount?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    scanRecords?: boolean | ExceptionTicket$scanRecordsArgs<ExtArgs>
    approvalRecords?: boolean | ExceptionTicket$approvalRecordsArgs<ExtArgs>
    compensationRecords?: boolean | ExceptionTicket$compensationRecordsArgs<ExtArgs>
    _count?: boolean | ExceptionTicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exceptionTicket"]>

  export type ExceptionTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNo?: boolean
    orderSnapshotId?: boolean
    exceptionType?: boolean
    source?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    currentApprovalLevel?: boolean
    resubmitCount?: boolean
    maxResubmitCount?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exceptionTicket"]>

  export type ExceptionTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketNo?: boolean
    orderSnapshotId?: boolean
    exceptionType?: boolean
    source?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    currentApprovalLevel?: boolean
    resubmitCount?: boolean
    maxResubmitCount?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exceptionTicket"]>

  export type ExceptionTicketSelectScalar = {
    id?: boolean
    ticketNo?: boolean
    orderSnapshotId?: boolean
    exceptionType?: boolean
    source?: boolean
    category?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    currentApprovalLevel?: boolean
    resubmitCount?: boolean
    maxResubmitCount?: boolean
    submittedBy?: boolean
    submittedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExceptionTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketNo" | "orderSnapshotId" | "exceptionType" | "source" | "category" | "description" | "status" | "priority" | "currentApprovalLevel" | "resubmitCount" | "maxResubmitCount" | "submittedBy" | "submittedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["exceptionTicket"]>
  export type ExceptionTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
    scanRecords?: boolean | ExceptionTicket$scanRecordsArgs<ExtArgs>
    approvalRecords?: boolean | ExceptionTicket$approvalRecordsArgs<ExtArgs>
    compensationRecords?: boolean | ExceptionTicket$compensationRecordsArgs<ExtArgs>
    _count?: boolean | ExceptionTicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExceptionTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
  }
  export type ExceptionTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderSnapshot?: boolean | OrderSnapshotDefaultArgs<ExtArgs>
  }

  export type $ExceptionTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExceptionTicket"
    objects: {
      orderSnapshot: Prisma.$OrderSnapshotPayload<ExtArgs>
      scanRecords: Prisma.$ScanRecordPayload<ExtArgs>[]
      approvalRecords: Prisma.$ApprovalRecordPayload<ExtArgs>[]
      compensationRecords: Prisma.$CompensationRecordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketNo: string
      orderSnapshotId: string
      exceptionType: string
      source: string
      category: string
      description: string
      status: string
      priority: string
      currentApprovalLevel: number
      resubmitCount: number
      maxResubmitCount: number
      submittedBy: string
      submittedAt: Date
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exceptionTicket"]>
    composites: {}
  }

  type ExceptionTicketGetPayload<S extends boolean | null | undefined | ExceptionTicketDefaultArgs> = $Result.GetResult<Prisma.$ExceptionTicketPayload, S>

  type ExceptionTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExceptionTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExceptionTicketCountAggregateInputType | true
    }

  export interface ExceptionTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExceptionTicket'], meta: { name: 'ExceptionTicket' } }
    /**
     * Find zero or one ExceptionTicket that matches the filter.
     * @param {ExceptionTicketFindUniqueArgs} args - Arguments to find a ExceptionTicket
     * @example
     * // Get one ExceptionTicket
     * const exceptionTicket = await prisma.exceptionTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExceptionTicketFindUniqueArgs>(args: SelectSubset<T, ExceptionTicketFindUniqueArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExceptionTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExceptionTicketFindUniqueOrThrowArgs} args - Arguments to find a ExceptionTicket
     * @example
     * // Get one ExceptionTicket
     * const exceptionTicket = await prisma.exceptionTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExceptionTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, ExceptionTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExceptionTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketFindFirstArgs} args - Arguments to find a ExceptionTicket
     * @example
     * // Get one ExceptionTicket
     * const exceptionTicket = await prisma.exceptionTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExceptionTicketFindFirstArgs>(args?: SelectSubset<T, ExceptionTicketFindFirstArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExceptionTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketFindFirstOrThrowArgs} args - Arguments to find a ExceptionTicket
     * @example
     * // Get one ExceptionTicket
     * const exceptionTicket = await prisma.exceptionTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExceptionTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, ExceptionTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExceptionTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExceptionTickets
     * const exceptionTickets = await prisma.exceptionTicket.findMany()
     * 
     * // Get first 10 ExceptionTickets
     * const exceptionTickets = await prisma.exceptionTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const exceptionTicketWithIdOnly = await prisma.exceptionTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExceptionTicketFindManyArgs>(args?: SelectSubset<T, ExceptionTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExceptionTicket.
     * @param {ExceptionTicketCreateArgs} args - Arguments to create a ExceptionTicket.
     * @example
     * // Create one ExceptionTicket
     * const ExceptionTicket = await prisma.exceptionTicket.create({
     *   data: {
     *     // ... data to create a ExceptionTicket
     *   }
     * })
     * 
     */
    create<T extends ExceptionTicketCreateArgs>(args: SelectSubset<T, ExceptionTicketCreateArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExceptionTickets.
     * @param {ExceptionTicketCreateManyArgs} args - Arguments to create many ExceptionTickets.
     * @example
     * // Create many ExceptionTickets
     * const exceptionTicket = await prisma.exceptionTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExceptionTicketCreateManyArgs>(args?: SelectSubset<T, ExceptionTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExceptionTickets and returns the data saved in the database.
     * @param {ExceptionTicketCreateManyAndReturnArgs} args - Arguments to create many ExceptionTickets.
     * @example
     * // Create many ExceptionTickets
     * const exceptionTicket = await prisma.exceptionTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExceptionTickets and only return the `id`
     * const exceptionTicketWithIdOnly = await prisma.exceptionTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExceptionTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, ExceptionTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExceptionTicket.
     * @param {ExceptionTicketDeleteArgs} args - Arguments to delete one ExceptionTicket.
     * @example
     * // Delete one ExceptionTicket
     * const ExceptionTicket = await prisma.exceptionTicket.delete({
     *   where: {
     *     // ... filter to delete one ExceptionTicket
     *   }
     * })
     * 
     */
    delete<T extends ExceptionTicketDeleteArgs>(args: SelectSubset<T, ExceptionTicketDeleteArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExceptionTicket.
     * @param {ExceptionTicketUpdateArgs} args - Arguments to update one ExceptionTicket.
     * @example
     * // Update one ExceptionTicket
     * const exceptionTicket = await prisma.exceptionTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExceptionTicketUpdateArgs>(args: SelectSubset<T, ExceptionTicketUpdateArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExceptionTickets.
     * @param {ExceptionTicketDeleteManyArgs} args - Arguments to filter ExceptionTickets to delete.
     * @example
     * // Delete a few ExceptionTickets
     * const { count } = await prisma.exceptionTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExceptionTicketDeleteManyArgs>(args?: SelectSubset<T, ExceptionTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExceptionTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExceptionTickets
     * const exceptionTicket = await prisma.exceptionTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExceptionTicketUpdateManyArgs>(args: SelectSubset<T, ExceptionTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExceptionTickets and returns the data updated in the database.
     * @param {ExceptionTicketUpdateManyAndReturnArgs} args - Arguments to update many ExceptionTickets.
     * @example
     * // Update many ExceptionTickets
     * const exceptionTicket = await prisma.exceptionTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExceptionTickets and only return the `id`
     * const exceptionTicketWithIdOnly = await prisma.exceptionTicket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExceptionTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, ExceptionTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExceptionTicket.
     * @param {ExceptionTicketUpsertArgs} args - Arguments to update or create a ExceptionTicket.
     * @example
     * // Update or create a ExceptionTicket
     * const exceptionTicket = await prisma.exceptionTicket.upsert({
     *   create: {
     *     // ... data to create a ExceptionTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExceptionTicket we want to update
     *   }
     * })
     */
    upsert<T extends ExceptionTicketUpsertArgs>(args: SelectSubset<T, ExceptionTicketUpsertArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExceptionTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketCountArgs} args - Arguments to filter ExceptionTickets to count.
     * @example
     * // Count the number of ExceptionTickets
     * const count = await prisma.exceptionTicket.count({
     *   where: {
     *     // ... the filter for the ExceptionTickets we want to count
     *   }
     * })
    **/
    count<T extends ExceptionTicketCountArgs>(
      args?: Subset<T, ExceptionTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExceptionTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExceptionTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExceptionTicketAggregateArgs>(args: Subset<T, ExceptionTicketAggregateArgs>): Prisma.PrismaPromise<GetExceptionTicketAggregateType<T>>

    /**
     * Group by ExceptionTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExceptionTicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExceptionTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExceptionTicketGroupByArgs['orderBy'] }
        : { orderBy?: ExceptionTicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExceptionTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExceptionTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExceptionTicket model
   */
  readonly fields: ExceptionTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExceptionTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExceptionTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orderSnapshot<T extends OrderSnapshotDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderSnapshotDefaultArgs<ExtArgs>>): Prisma__OrderSnapshotClient<$Result.GetResult<Prisma.$OrderSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scanRecords<T extends ExceptionTicket$scanRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionTicket$scanRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScanRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvalRecords<T extends ExceptionTicket$approvalRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionTicket$approvalRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compensationRecords<T extends ExceptionTicket$compensationRecordsArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionTicket$compensationRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExceptionTicket model
   */
  interface ExceptionTicketFieldRefs {
    readonly id: FieldRef<"ExceptionTicket", 'String'>
    readonly ticketNo: FieldRef<"ExceptionTicket", 'String'>
    readonly orderSnapshotId: FieldRef<"ExceptionTicket", 'String'>
    readonly exceptionType: FieldRef<"ExceptionTicket", 'String'>
    readonly source: FieldRef<"ExceptionTicket", 'String'>
    readonly category: FieldRef<"ExceptionTicket", 'String'>
    readonly description: FieldRef<"ExceptionTicket", 'String'>
    readonly status: FieldRef<"ExceptionTicket", 'String'>
    readonly priority: FieldRef<"ExceptionTicket", 'String'>
    readonly currentApprovalLevel: FieldRef<"ExceptionTicket", 'Int'>
    readonly resubmitCount: FieldRef<"ExceptionTicket", 'Int'>
    readonly maxResubmitCount: FieldRef<"ExceptionTicket", 'Int'>
    readonly submittedBy: FieldRef<"ExceptionTicket", 'String'>
    readonly submittedAt: FieldRef<"ExceptionTicket", 'DateTime'>
    readonly completedAt: FieldRef<"ExceptionTicket", 'DateTime'>
    readonly createdAt: FieldRef<"ExceptionTicket", 'DateTime'>
    readonly updatedAt: FieldRef<"ExceptionTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExceptionTicket findUnique
   */
  export type ExceptionTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionTicket to fetch.
     */
    where: ExceptionTicketWhereUniqueInput
  }

  /**
   * ExceptionTicket findUniqueOrThrow
   */
  export type ExceptionTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionTicket to fetch.
     */
    where: ExceptionTicketWhereUniqueInput
  }

  /**
   * ExceptionTicket findFirst
   */
  export type ExceptionTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionTicket to fetch.
     */
    where?: ExceptionTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionTickets to fetch.
     */
    orderBy?: ExceptionTicketOrderByWithRelationInput | ExceptionTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExceptionTickets.
     */
    cursor?: ExceptionTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExceptionTickets.
     */
    distinct?: ExceptionTicketScalarFieldEnum | ExceptionTicketScalarFieldEnum[]
  }

  /**
   * ExceptionTicket findFirstOrThrow
   */
  export type ExceptionTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionTicket to fetch.
     */
    where?: ExceptionTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionTickets to fetch.
     */
    orderBy?: ExceptionTicketOrderByWithRelationInput | ExceptionTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExceptionTickets.
     */
    cursor?: ExceptionTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExceptionTickets.
     */
    distinct?: ExceptionTicketScalarFieldEnum | ExceptionTicketScalarFieldEnum[]
  }

  /**
   * ExceptionTicket findMany
   */
  export type ExceptionTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * Filter, which ExceptionTickets to fetch.
     */
    where?: ExceptionTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExceptionTickets to fetch.
     */
    orderBy?: ExceptionTicketOrderByWithRelationInput | ExceptionTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExceptionTickets.
     */
    cursor?: ExceptionTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExceptionTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExceptionTickets.
     */
    skip?: number
    distinct?: ExceptionTicketScalarFieldEnum | ExceptionTicketScalarFieldEnum[]
  }

  /**
   * ExceptionTicket create
   */
  export type ExceptionTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a ExceptionTicket.
     */
    data: XOR<ExceptionTicketCreateInput, ExceptionTicketUncheckedCreateInput>
  }

  /**
   * ExceptionTicket createMany
   */
  export type ExceptionTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExceptionTickets.
     */
    data: ExceptionTicketCreateManyInput | ExceptionTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExceptionTicket createManyAndReturn
   */
  export type ExceptionTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * The data used to create many ExceptionTickets.
     */
    data: ExceptionTicketCreateManyInput | ExceptionTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExceptionTicket update
   */
  export type ExceptionTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a ExceptionTicket.
     */
    data: XOR<ExceptionTicketUpdateInput, ExceptionTicketUncheckedUpdateInput>
    /**
     * Choose, which ExceptionTicket to update.
     */
    where: ExceptionTicketWhereUniqueInput
  }

  /**
   * ExceptionTicket updateMany
   */
  export type ExceptionTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExceptionTickets.
     */
    data: XOR<ExceptionTicketUpdateManyMutationInput, ExceptionTicketUncheckedUpdateManyInput>
    /**
     * Filter which ExceptionTickets to update
     */
    where?: ExceptionTicketWhereInput
    /**
     * Limit how many ExceptionTickets to update.
     */
    limit?: number
  }

  /**
   * ExceptionTicket updateManyAndReturn
   */
  export type ExceptionTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * The data used to update ExceptionTickets.
     */
    data: XOR<ExceptionTicketUpdateManyMutationInput, ExceptionTicketUncheckedUpdateManyInput>
    /**
     * Filter which ExceptionTickets to update
     */
    where?: ExceptionTicketWhereInput
    /**
     * Limit how many ExceptionTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExceptionTicket upsert
   */
  export type ExceptionTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the ExceptionTicket to update in case it exists.
     */
    where: ExceptionTicketWhereUniqueInput
    /**
     * In case the ExceptionTicket found by the `where` argument doesn't exist, create a new ExceptionTicket with this data.
     */
    create: XOR<ExceptionTicketCreateInput, ExceptionTicketUncheckedCreateInput>
    /**
     * In case the ExceptionTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExceptionTicketUpdateInput, ExceptionTicketUncheckedUpdateInput>
  }

  /**
   * ExceptionTicket delete
   */
  export type ExceptionTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
    /**
     * Filter which ExceptionTicket to delete.
     */
    where: ExceptionTicketWhereUniqueInput
  }

  /**
   * ExceptionTicket deleteMany
   */
  export type ExceptionTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExceptionTickets to delete
     */
    where?: ExceptionTicketWhereInput
    /**
     * Limit how many ExceptionTickets to delete.
     */
    limit?: number
  }

  /**
   * ExceptionTicket.scanRecords
   */
  export type ExceptionTicket$scanRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScanRecord
     */
    select?: ScanRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScanRecord
     */
    omit?: ScanRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScanRecordInclude<ExtArgs> | null
    where?: ScanRecordWhereInput
    orderBy?: ScanRecordOrderByWithRelationInput | ScanRecordOrderByWithRelationInput[]
    cursor?: ScanRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScanRecordScalarFieldEnum | ScanRecordScalarFieldEnum[]
  }

  /**
   * ExceptionTicket.approvalRecords
   */
  export type ExceptionTicket$approvalRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    where?: ApprovalRecordWhereInput
    orderBy?: ApprovalRecordOrderByWithRelationInput | ApprovalRecordOrderByWithRelationInput[]
    cursor?: ApprovalRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApprovalRecordScalarFieldEnum | ApprovalRecordScalarFieldEnum[]
  }

  /**
   * ExceptionTicket.compensationRecords
   */
  export type ExceptionTicket$compensationRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    where?: CompensationRecordWhereInput
    orderBy?: CompensationRecordOrderByWithRelationInput | CompensationRecordOrderByWithRelationInput[]
    cursor?: CompensationRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompensationRecordScalarFieldEnum | CompensationRecordScalarFieldEnum[]
  }

  /**
   * ExceptionTicket without action
   */
  export type ExceptionTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExceptionTicket
     */
    select?: ExceptionTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExceptionTicket
     */
    omit?: ExceptionTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExceptionTicketInclude<ExtArgs> | null
  }


  /**
   * Model ApprovalRecord
   */

  export type AggregateApprovalRecord = {
    _count: ApprovalRecordCountAggregateOutputType | null
    _avg: ApprovalRecordAvgAggregateOutputType | null
    _sum: ApprovalRecordSumAggregateOutputType | null
    _min: ApprovalRecordMinAggregateOutputType | null
    _max: ApprovalRecordMaxAggregateOutputType | null
  }

  export type ApprovalRecordAvgAggregateOutputType = {
    approvalLevel: number | null
  }

  export type ApprovalRecordSumAggregateOutputType = {
    approvalLevel: number | null
  }

  export type ApprovalRecordMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    approvalLevel: number | null
    approverId: string | null
    approverName: string | null
    action: string | null
    comment: string | null
    approvedAt: Date | null
    createdAt: Date | null
  }

  export type ApprovalRecordMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    approvalLevel: number | null
    approverId: string | null
    approverName: string | null
    action: string | null
    comment: string | null
    approvedAt: Date | null
    createdAt: Date | null
  }

  export type ApprovalRecordCountAggregateOutputType = {
    id: number
    ticketId: number
    approvalLevel: number
    approverId: number
    approverName: number
    action: number
    comment: number
    approvedAt: number
    createdAt: number
    _all: number
  }


  export type ApprovalRecordAvgAggregateInputType = {
    approvalLevel?: true
  }

  export type ApprovalRecordSumAggregateInputType = {
    approvalLevel?: true
  }

  export type ApprovalRecordMinAggregateInputType = {
    id?: true
    ticketId?: true
    approvalLevel?: true
    approverId?: true
    approverName?: true
    action?: true
    comment?: true
    approvedAt?: true
    createdAt?: true
  }

  export type ApprovalRecordMaxAggregateInputType = {
    id?: true
    ticketId?: true
    approvalLevel?: true
    approverId?: true
    approverName?: true
    action?: true
    comment?: true
    approvedAt?: true
    createdAt?: true
  }

  export type ApprovalRecordCountAggregateInputType = {
    id?: true
    ticketId?: true
    approvalLevel?: true
    approverId?: true
    approverName?: true
    action?: true
    comment?: true
    approvedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ApprovalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRecord to aggregate.
     */
    where?: ApprovalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: ApprovalRecordOrderByWithRelationInput | ApprovalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApprovalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApprovalRecords
    **/
    _count?: true | ApprovalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApprovalRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApprovalRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApprovalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApprovalRecordMaxAggregateInputType
  }

  export type GetApprovalRecordAggregateType<T extends ApprovalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateApprovalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApprovalRecord[P]>
      : GetScalarType<T[P], AggregateApprovalRecord[P]>
  }




  export type ApprovalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApprovalRecordWhereInput
    orderBy?: ApprovalRecordOrderByWithAggregationInput | ApprovalRecordOrderByWithAggregationInput[]
    by: ApprovalRecordScalarFieldEnum[] | ApprovalRecordScalarFieldEnum
    having?: ApprovalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApprovalRecordCountAggregateInputType | true
    _avg?: ApprovalRecordAvgAggregateInputType
    _sum?: ApprovalRecordSumAggregateInputType
    _min?: ApprovalRecordMinAggregateInputType
    _max?: ApprovalRecordMaxAggregateInputType
  }

  export type ApprovalRecordGroupByOutputType = {
    id: string
    ticketId: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date
    createdAt: Date
    _count: ApprovalRecordCountAggregateOutputType | null
    _avg: ApprovalRecordAvgAggregateOutputType | null
    _sum: ApprovalRecordSumAggregateOutputType | null
    _min: ApprovalRecordMinAggregateOutputType | null
    _max: ApprovalRecordMaxAggregateOutputType | null
  }

  type GetApprovalRecordGroupByPayload<T extends ApprovalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApprovalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApprovalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApprovalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], ApprovalRecordGroupByOutputType[P]>
        }
      >
    >


  export type ApprovalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    approvalLevel?: boolean
    approverId?: boolean
    approverName?: boolean
    action?: boolean
    comment?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRecord"]>

  export type ApprovalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    approvalLevel?: boolean
    approverId?: boolean
    approverName?: boolean
    action?: boolean
    comment?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRecord"]>

  export type ApprovalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    approvalLevel?: boolean
    approverId?: boolean
    approverName?: boolean
    action?: boolean
    comment?: boolean
    approvedAt?: boolean
    createdAt?: boolean
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["approvalRecord"]>

  export type ApprovalRecordSelectScalar = {
    id?: boolean
    ticketId?: boolean
    approvalLevel?: boolean
    approverId?: boolean
    approverName?: boolean
    action?: boolean
    comment?: boolean
    approvedAt?: boolean
    createdAt?: boolean
  }

  export type ApprovalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "approvalLevel" | "approverId" | "approverName" | "action" | "comment" | "approvedAt" | "createdAt", ExtArgs["result"]["approvalRecord"]>
  export type ApprovalRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }
  export type ApprovalRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }
  export type ApprovalRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }

  export type $ApprovalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApprovalRecord"
    objects: {
      ticket: Prisma.$ExceptionTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      approvalLevel: number
      approverId: string
      approverName: string
      action: string
      comment: string
      approvedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["approvalRecord"]>
    composites: {}
  }

  type ApprovalRecordGetPayload<S extends boolean | null | undefined | ApprovalRecordDefaultArgs> = $Result.GetResult<Prisma.$ApprovalRecordPayload, S>

  type ApprovalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApprovalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApprovalRecordCountAggregateInputType | true
    }

  export interface ApprovalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRecord'], meta: { name: 'ApprovalRecord' } }
    /**
     * Find zero or one ApprovalRecord that matches the filter.
     * @param {ApprovalRecordFindUniqueArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApprovalRecordFindUniqueArgs>(args: SelectSubset<T, ApprovalRecordFindUniqueArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ApprovalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApprovalRecordFindUniqueOrThrowArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApprovalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, ApprovalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordFindFirstArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApprovalRecordFindFirstArgs>(args?: SelectSubset<T, ApprovalRecordFindFirstArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ApprovalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordFindFirstOrThrowArgs} args - Arguments to find a ApprovalRecord
     * @example
     * // Get one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApprovalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, ApprovalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ApprovalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApprovalRecords
     * const approvalRecords = await prisma.approvalRecord.findMany()
     * 
     * // Get first 10 ApprovalRecords
     * const approvalRecords = await prisma.approvalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const approvalRecordWithIdOnly = await prisma.approvalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApprovalRecordFindManyArgs>(args?: SelectSubset<T, ApprovalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ApprovalRecord.
     * @param {ApprovalRecordCreateArgs} args - Arguments to create a ApprovalRecord.
     * @example
     * // Create one ApprovalRecord
     * const ApprovalRecord = await prisma.approvalRecord.create({
     *   data: {
     *     // ... data to create a ApprovalRecord
     *   }
     * })
     * 
     */
    create<T extends ApprovalRecordCreateArgs>(args: SelectSubset<T, ApprovalRecordCreateArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ApprovalRecords.
     * @param {ApprovalRecordCreateManyArgs} args - Arguments to create many ApprovalRecords.
     * @example
     * // Create many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApprovalRecordCreateManyArgs>(args?: SelectSubset<T, ApprovalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApprovalRecords and returns the data saved in the database.
     * @param {ApprovalRecordCreateManyAndReturnArgs} args - Arguments to create many ApprovalRecords.
     * @example
     * // Create many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApprovalRecords and only return the `id`
     * const approvalRecordWithIdOnly = await prisma.approvalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApprovalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, ApprovalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ApprovalRecord.
     * @param {ApprovalRecordDeleteArgs} args - Arguments to delete one ApprovalRecord.
     * @example
     * // Delete one ApprovalRecord
     * const ApprovalRecord = await prisma.approvalRecord.delete({
     *   where: {
     *     // ... filter to delete one ApprovalRecord
     *   }
     * })
     * 
     */
    delete<T extends ApprovalRecordDeleteArgs>(args: SelectSubset<T, ApprovalRecordDeleteArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ApprovalRecord.
     * @param {ApprovalRecordUpdateArgs} args - Arguments to update one ApprovalRecord.
     * @example
     * // Update one ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApprovalRecordUpdateArgs>(args: SelectSubset<T, ApprovalRecordUpdateArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ApprovalRecords.
     * @param {ApprovalRecordDeleteManyArgs} args - Arguments to filter ApprovalRecords to delete.
     * @example
     * // Delete a few ApprovalRecords
     * const { count } = await prisma.approvalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApprovalRecordDeleteManyArgs>(args?: SelectSubset<T, ApprovalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApprovalRecordUpdateManyArgs>(args: SelectSubset<T, ApprovalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApprovalRecords and returns the data updated in the database.
     * @param {ApprovalRecordUpdateManyAndReturnArgs} args - Arguments to update many ApprovalRecords.
     * @example
     * // Update many ApprovalRecords
     * const approvalRecord = await prisma.approvalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ApprovalRecords and only return the `id`
     * const approvalRecordWithIdOnly = await prisma.approvalRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApprovalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, ApprovalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ApprovalRecord.
     * @param {ApprovalRecordUpsertArgs} args - Arguments to update or create a ApprovalRecord.
     * @example
     * // Update or create a ApprovalRecord
     * const approvalRecord = await prisma.approvalRecord.upsert({
     *   create: {
     *     // ... data to create a ApprovalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApprovalRecord we want to update
     *   }
     * })
     */
    upsert<T extends ApprovalRecordUpsertArgs>(args: SelectSubset<T, ApprovalRecordUpsertArgs<ExtArgs>>): Prisma__ApprovalRecordClient<$Result.GetResult<Prisma.$ApprovalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ApprovalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordCountArgs} args - Arguments to filter ApprovalRecords to count.
     * @example
     * // Count the number of ApprovalRecords
     * const count = await prisma.approvalRecord.count({
     *   where: {
     *     // ... the filter for the ApprovalRecords we want to count
     *   }
     * })
    **/
    count<T extends ApprovalRecordCountArgs>(
      args?: Subset<T, ApprovalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApprovalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApprovalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApprovalRecordAggregateArgs>(args: Subset<T, ApprovalRecordAggregateArgs>): Prisma.PrismaPromise<GetApprovalRecordAggregateType<T>>

    /**
     * Group by ApprovalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApprovalRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApprovalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApprovalRecordGroupByArgs['orderBy'] }
        : { orderBy?: ApprovalRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApprovalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApprovalRecord model
   */
  readonly fields: ApprovalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApprovalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApprovalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends ExceptionTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionTicketDefaultArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApprovalRecord model
   */
  interface ApprovalRecordFieldRefs {
    readonly id: FieldRef<"ApprovalRecord", 'String'>
    readonly ticketId: FieldRef<"ApprovalRecord", 'String'>
    readonly approvalLevel: FieldRef<"ApprovalRecord", 'Int'>
    readonly approverId: FieldRef<"ApprovalRecord", 'String'>
    readonly approverName: FieldRef<"ApprovalRecord", 'String'>
    readonly action: FieldRef<"ApprovalRecord", 'String'>
    readonly comment: FieldRef<"ApprovalRecord", 'String'>
    readonly approvedAt: FieldRef<"ApprovalRecord", 'DateTime'>
    readonly createdAt: FieldRef<"ApprovalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApprovalRecord findUnique
   */
  export type ApprovalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where: ApprovalRecordWhereUniqueInput
  }

  /**
   * ApprovalRecord findUniqueOrThrow
   */
  export type ApprovalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where: ApprovalRecordWhereUniqueInput
  }

  /**
   * ApprovalRecord findFirst
   */
  export type ApprovalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where?: ApprovalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: ApprovalRecordOrderByWithRelationInput | ApprovalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRecords.
     */
    cursor?: ApprovalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRecords.
     */
    distinct?: ApprovalRecordScalarFieldEnum | ApprovalRecordScalarFieldEnum[]
  }

  /**
   * ApprovalRecord findFirstOrThrow
   */
  export type ApprovalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRecord to fetch.
     */
    where?: ApprovalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: ApprovalRecordOrderByWithRelationInput | ApprovalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApprovalRecords.
     */
    cursor?: ApprovalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApprovalRecords.
     */
    distinct?: ApprovalRecordScalarFieldEnum | ApprovalRecordScalarFieldEnum[]
  }

  /**
   * ApprovalRecord findMany
   */
  export type ApprovalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * Filter, which ApprovalRecords to fetch.
     */
    where?: ApprovalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApprovalRecords to fetch.
     */
    orderBy?: ApprovalRecordOrderByWithRelationInput | ApprovalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApprovalRecords.
     */
    cursor?: ApprovalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApprovalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApprovalRecords.
     */
    skip?: number
    distinct?: ApprovalRecordScalarFieldEnum | ApprovalRecordScalarFieldEnum[]
  }

  /**
   * ApprovalRecord create
   */
  export type ApprovalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a ApprovalRecord.
     */
    data: XOR<ApprovalRecordCreateInput, ApprovalRecordUncheckedCreateInput>
  }

  /**
   * ApprovalRecord createMany
   */
  export type ApprovalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApprovalRecords.
     */
    data: ApprovalRecordCreateManyInput | ApprovalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApprovalRecord createManyAndReturn
   */
  export type ApprovalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many ApprovalRecords.
     */
    data: ApprovalRecordCreateManyInput | ApprovalRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRecord update
   */
  export type ApprovalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a ApprovalRecord.
     */
    data: XOR<ApprovalRecordUpdateInput, ApprovalRecordUncheckedUpdateInput>
    /**
     * Choose, which ApprovalRecord to update.
     */
    where: ApprovalRecordWhereUniqueInput
  }

  /**
   * ApprovalRecord updateMany
   */
  export type ApprovalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApprovalRecords.
     */
    data: XOR<ApprovalRecordUpdateManyMutationInput, ApprovalRecordUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRecords to update
     */
    where?: ApprovalRecordWhereInput
    /**
     * Limit how many ApprovalRecords to update.
     */
    limit?: number
  }

  /**
   * ApprovalRecord updateManyAndReturn
   */
  export type ApprovalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * The data used to update ApprovalRecords.
     */
    data: XOR<ApprovalRecordUpdateManyMutationInput, ApprovalRecordUncheckedUpdateManyInput>
    /**
     * Filter which ApprovalRecords to update
     */
    where?: ApprovalRecordWhereInput
    /**
     * Limit how many ApprovalRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApprovalRecord upsert
   */
  export type ApprovalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the ApprovalRecord to update in case it exists.
     */
    where: ApprovalRecordWhereUniqueInput
    /**
     * In case the ApprovalRecord found by the `where` argument doesn't exist, create a new ApprovalRecord with this data.
     */
    create: XOR<ApprovalRecordCreateInput, ApprovalRecordUncheckedCreateInput>
    /**
     * In case the ApprovalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApprovalRecordUpdateInput, ApprovalRecordUncheckedUpdateInput>
  }

  /**
   * ApprovalRecord delete
   */
  export type ApprovalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
    /**
     * Filter which ApprovalRecord to delete.
     */
    where: ApprovalRecordWhereUniqueInput
  }

  /**
   * ApprovalRecord deleteMany
   */
  export type ApprovalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApprovalRecords to delete
     */
    where?: ApprovalRecordWhereInput
    /**
     * Limit how many ApprovalRecords to delete.
     */
    limit?: number
  }

  /**
   * ApprovalRecord without action
   */
  export type ApprovalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApprovalRecord
     */
    select?: ApprovalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ApprovalRecord
     */
    omit?: ApprovalRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApprovalRecordInclude<ExtArgs> | null
  }


  /**
   * Model CompensationRecord
   */

  export type AggregateCompensationRecord = {
    _count: CompensationRecordCountAggregateOutputType | null
    _avg: CompensationRecordAvgAggregateOutputType | null
    _sum: CompensationRecordSumAggregateOutputType | null
    _min: CompensationRecordMinAggregateOutputType | null
    _max: CompensationRecordMaxAggregateOutputType | null
  }

  export type CompensationRecordAvgAggregateOutputType = {
    amount: number | null
  }

  export type CompensationRecordSumAggregateOutputType = {
    amount: number | null
  }

  export type CompensationRecordMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    approvalRecordId: string | null
    amount: number | null
    direction: string | null
    status: string | null
    reason: string | null
    paymentMethod: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompensationRecordMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    approvalRecordId: string | null
    amount: number | null
    direction: string | null
    status: string | null
    reason: string | null
    paymentMethod: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompensationRecordCountAggregateOutputType = {
    id: number
    ticketId: number
    approvalRecordId: number
    amount: number
    direction: number
    status: number
    reason: number
    paymentMethod: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompensationRecordAvgAggregateInputType = {
    amount?: true
  }

  export type CompensationRecordSumAggregateInputType = {
    amount?: true
  }

  export type CompensationRecordMinAggregateInputType = {
    id?: true
    ticketId?: true
    approvalRecordId?: true
    amount?: true
    direction?: true
    status?: true
    reason?: true
    paymentMethod?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompensationRecordMaxAggregateInputType = {
    id?: true
    ticketId?: true
    approvalRecordId?: true
    amount?: true
    direction?: true
    status?: true
    reason?: true
    paymentMethod?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompensationRecordCountAggregateInputType = {
    id?: true
    ticketId?: true
    approvalRecordId?: true
    amount?: true
    direction?: true
    status?: true
    reason?: true
    paymentMethod?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompensationRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompensationRecord to aggregate.
     */
    where?: CompensationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationRecords to fetch.
     */
    orderBy?: CompensationRecordOrderByWithRelationInput | CompensationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompensationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompensationRecords
    **/
    _count?: true | CompensationRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompensationRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompensationRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompensationRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompensationRecordMaxAggregateInputType
  }

  export type GetCompensationRecordAggregateType<T extends CompensationRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateCompensationRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompensationRecord[P]>
      : GetScalarType<T[P], AggregateCompensationRecord[P]>
  }




  export type CompensationRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompensationRecordWhereInput
    orderBy?: CompensationRecordOrderByWithAggregationInput | CompensationRecordOrderByWithAggregationInput[]
    by: CompensationRecordScalarFieldEnum[] | CompensationRecordScalarFieldEnum
    having?: CompensationRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompensationRecordCountAggregateInputType | true
    _avg?: CompensationRecordAvgAggregateInputType
    _sum?: CompensationRecordSumAggregateInputType
    _min?: CompensationRecordMinAggregateInputType
    _max?: CompensationRecordMaxAggregateInputType
  }

  export type CompensationRecordGroupByOutputType = {
    id: string
    ticketId: string
    approvalRecordId: string
    amount: number
    direction: string
    status: string
    reason: string
    paymentMethod: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CompensationRecordCountAggregateOutputType | null
    _avg: CompensationRecordAvgAggregateOutputType | null
    _sum: CompensationRecordSumAggregateOutputType | null
    _min: CompensationRecordMinAggregateOutputType | null
    _max: CompensationRecordMaxAggregateOutputType | null
  }

  type GetCompensationRecordGroupByPayload<T extends CompensationRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompensationRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompensationRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompensationRecordGroupByOutputType[P]>
            : GetScalarType<T[P], CompensationRecordGroupByOutputType[P]>
        }
      >
    >


  export type CompensationRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    amount?: boolean
    direction?: boolean
    status?: boolean
    reason?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compensationRecord"]>

  export type CompensationRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    amount?: boolean
    direction?: boolean
    status?: boolean
    reason?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compensationRecord"]>

  export type CompensationRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    amount?: boolean
    direction?: boolean
    status?: boolean
    reason?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compensationRecord"]>

  export type CompensationRecordSelectScalar = {
    id?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    amount?: boolean
    direction?: boolean
    status?: boolean
    reason?: boolean
    paymentMethod?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompensationRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "approvalRecordId" | "amount" | "direction" | "status" | "reason" | "paymentMethod" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["compensationRecord"]>
  export type CompensationRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }
  export type CompensationRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }
  export type CompensationRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | ExceptionTicketDefaultArgs<ExtArgs>
  }

  export type $CompensationRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompensationRecord"
    objects: {
      ticket: Prisma.$ExceptionTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      approvalRecordId: string
      amount: number
      direction: string
      status: string
      reason: string
      paymentMethod: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["compensationRecord"]>
    composites: {}
  }

  type CompensationRecordGetPayload<S extends boolean | null | undefined | CompensationRecordDefaultArgs> = $Result.GetResult<Prisma.$CompensationRecordPayload, S>

  type CompensationRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompensationRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompensationRecordCountAggregateInputType | true
    }

  export interface CompensationRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompensationRecord'], meta: { name: 'CompensationRecord' } }
    /**
     * Find zero or one CompensationRecord that matches the filter.
     * @param {CompensationRecordFindUniqueArgs} args - Arguments to find a CompensationRecord
     * @example
     * // Get one CompensationRecord
     * const compensationRecord = await prisma.compensationRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompensationRecordFindUniqueArgs>(args: SelectSubset<T, CompensationRecordFindUniqueArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompensationRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompensationRecordFindUniqueOrThrowArgs} args - Arguments to find a CompensationRecord
     * @example
     * // Get one CompensationRecord
     * const compensationRecord = await prisma.compensationRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompensationRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, CompensationRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompensationRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordFindFirstArgs} args - Arguments to find a CompensationRecord
     * @example
     * // Get one CompensationRecord
     * const compensationRecord = await prisma.compensationRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompensationRecordFindFirstArgs>(args?: SelectSubset<T, CompensationRecordFindFirstArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompensationRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordFindFirstOrThrowArgs} args - Arguments to find a CompensationRecord
     * @example
     * // Get one CompensationRecord
     * const compensationRecord = await prisma.compensationRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompensationRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, CompensationRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompensationRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompensationRecords
     * const compensationRecords = await prisma.compensationRecord.findMany()
     * 
     * // Get first 10 CompensationRecords
     * const compensationRecords = await prisma.compensationRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compensationRecordWithIdOnly = await prisma.compensationRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompensationRecordFindManyArgs>(args?: SelectSubset<T, CompensationRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompensationRecord.
     * @param {CompensationRecordCreateArgs} args - Arguments to create a CompensationRecord.
     * @example
     * // Create one CompensationRecord
     * const CompensationRecord = await prisma.compensationRecord.create({
     *   data: {
     *     // ... data to create a CompensationRecord
     *   }
     * })
     * 
     */
    create<T extends CompensationRecordCreateArgs>(args: SelectSubset<T, CompensationRecordCreateArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompensationRecords.
     * @param {CompensationRecordCreateManyArgs} args - Arguments to create many CompensationRecords.
     * @example
     * // Create many CompensationRecords
     * const compensationRecord = await prisma.compensationRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompensationRecordCreateManyArgs>(args?: SelectSubset<T, CompensationRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompensationRecords and returns the data saved in the database.
     * @param {CompensationRecordCreateManyAndReturnArgs} args - Arguments to create many CompensationRecords.
     * @example
     * // Create many CompensationRecords
     * const compensationRecord = await prisma.compensationRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompensationRecords and only return the `id`
     * const compensationRecordWithIdOnly = await prisma.compensationRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompensationRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, CompensationRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompensationRecord.
     * @param {CompensationRecordDeleteArgs} args - Arguments to delete one CompensationRecord.
     * @example
     * // Delete one CompensationRecord
     * const CompensationRecord = await prisma.compensationRecord.delete({
     *   where: {
     *     // ... filter to delete one CompensationRecord
     *   }
     * })
     * 
     */
    delete<T extends CompensationRecordDeleteArgs>(args: SelectSubset<T, CompensationRecordDeleteArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompensationRecord.
     * @param {CompensationRecordUpdateArgs} args - Arguments to update one CompensationRecord.
     * @example
     * // Update one CompensationRecord
     * const compensationRecord = await prisma.compensationRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompensationRecordUpdateArgs>(args: SelectSubset<T, CompensationRecordUpdateArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompensationRecords.
     * @param {CompensationRecordDeleteManyArgs} args - Arguments to filter CompensationRecords to delete.
     * @example
     * // Delete a few CompensationRecords
     * const { count } = await prisma.compensationRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompensationRecordDeleteManyArgs>(args?: SelectSubset<T, CompensationRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompensationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompensationRecords
     * const compensationRecord = await prisma.compensationRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompensationRecordUpdateManyArgs>(args: SelectSubset<T, CompensationRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompensationRecords and returns the data updated in the database.
     * @param {CompensationRecordUpdateManyAndReturnArgs} args - Arguments to update many CompensationRecords.
     * @example
     * // Update many CompensationRecords
     * const compensationRecord = await prisma.compensationRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompensationRecords and only return the `id`
     * const compensationRecordWithIdOnly = await prisma.compensationRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompensationRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, CompensationRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompensationRecord.
     * @param {CompensationRecordUpsertArgs} args - Arguments to update or create a CompensationRecord.
     * @example
     * // Update or create a CompensationRecord
     * const compensationRecord = await prisma.compensationRecord.upsert({
     *   create: {
     *     // ... data to create a CompensationRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompensationRecord we want to update
     *   }
     * })
     */
    upsert<T extends CompensationRecordUpsertArgs>(args: SelectSubset<T, CompensationRecordUpsertArgs<ExtArgs>>): Prisma__CompensationRecordClient<$Result.GetResult<Prisma.$CompensationRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompensationRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordCountArgs} args - Arguments to filter CompensationRecords to count.
     * @example
     * // Count the number of CompensationRecords
     * const count = await prisma.compensationRecord.count({
     *   where: {
     *     // ... the filter for the CompensationRecords we want to count
     *   }
     * })
    **/
    count<T extends CompensationRecordCountArgs>(
      args?: Subset<T, CompensationRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompensationRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompensationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompensationRecordAggregateArgs>(args: Subset<T, CompensationRecordAggregateArgs>): Prisma.PrismaPromise<GetCompensationRecordAggregateType<T>>

    /**
     * Group by CompensationRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompensationRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompensationRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompensationRecordGroupByArgs['orderBy'] }
        : { orderBy?: CompensationRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompensationRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompensationRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompensationRecord model
   */
  readonly fields: CompensationRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompensationRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompensationRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends ExceptionTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExceptionTicketDefaultArgs<ExtArgs>>): Prisma__ExceptionTicketClient<$Result.GetResult<Prisma.$ExceptionTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompensationRecord model
   */
  interface CompensationRecordFieldRefs {
    readonly id: FieldRef<"CompensationRecord", 'String'>
    readonly ticketId: FieldRef<"CompensationRecord", 'String'>
    readonly approvalRecordId: FieldRef<"CompensationRecord", 'String'>
    readonly amount: FieldRef<"CompensationRecord", 'Float'>
    readonly direction: FieldRef<"CompensationRecord", 'String'>
    readonly status: FieldRef<"CompensationRecord", 'String'>
    readonly reason: FieldRef<"CompensationRecord", 'String'>
    readonly paymentMethod: FieldRef<"CompensationRecord", 'String'>
    readonly paidAt: FieldRef<"CompensationRecord", 'DateTime'>
    readonly createdAt: FieldRef<"CompensationRecord", 'DateTime'>
    readonly updatedAt: FieldRef<"CompensationRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompensationRecord findUnique
   */
  export type CompensationRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CompensationRecord to fetch.
     */
    where: CompensationRecordWhereUniqueInput
  }

  /**
   * CompensationRecord findUniqueOrThrow
   */
  export type CompensationRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CompensationRecord to fetch.
     */
    where: CompensationRecordWhereUniqueInput
  }

  /**
   * CompensationRecord findFirst
   */
  export type CompensationRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CompensationRecord to fetch.
     */
    where?: CompensationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationRecords to fetch.
     */
    orderBy?: CompensationRecordOrderByWithRelationInput | CompensationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompensationRecords.
     */
    cursor?: CompensationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationRecords.
     */
    distinct?: CompensationRecordScalarFieldEnum | CompensationRecordScalarFieldEnum[]
  }

  /**
   * CompensationRecord findFirstOrThrow
   */
  export type CompensationRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CompensationRecord to fetch.
     */
    where?: CompensationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationRecords to fetch.
     */
    orderBy?: CompensationRecordOrderByWithRelationInput | CompensationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompensationRecords.
     */
    cursor?: CompensationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompensationRecords.
     */
    distinct?: CompensationRecordScalarFieldEnum | CompensationRecordScalarFieldEnum[]
  }

  /**
   * CompensationRecord findMany
   */
  export type CompensationRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * Filter, which CompensationRecords to fetch.
     */
    where?: CompensationRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompensationRecords to fetch.
     */
    orderBy?: CompensationRecordOrderByWithRelationInput | CompensationRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompensationRecords.
     */
    cursor?: CompensationRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompensationRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompensationRecords.
     */
    skip?: number
    distinct?: CompensationRecordScalarFieldEnum | CompensationRecordScalarFieldEnum[]
  }

  /**
   * CompensationRecord create
   */
  export type CompensationRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a CompensationRecord.
     */
    data: XOR<CompensationRecordCreateInput, CompensationRecordUncheckedCreateInput>
  }

  /**
   * CompensationRecord createMany
   */
  export type CompensationRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompensationRecords.
     */
    data: CompensationRecordCreateManyInput | CompensationRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompensationRecord createManyAndReturn
   */
  export type CompensationRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * The data used to create many CompensationRecords.
     */
    data: CompensationRecordCreateManyInput | CompensationRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompensationRecord update
   */
  export type CompensationRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a CompensationRecord.
     */
    data: XOR<CompensationRecordUpdateInput, CompensationRecordUncheckedUpdateInput>
    /**
     * Choose, which CompensationRecord to update.
     */
    where: CompensationRecordWhereUniqueInput
  }

  /**
   * CompensationRecord updateMany
   */
  export type CompensationRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompensationRecords.
     */
    data: XOR<CompensationRecordUpdateManyMutationInput, CompensationRecordUncheckedUpdateManyInput>
    /**
     * Filter which CompensationRecords to update
     */
    where?: CompensationRecordWhereInput
    /**
     * Limit how many CompensationRecords to update.
     */
    limit?: number
  }

  /**
   * CompensationRecord updateManyAndReturn
   */
  export type CompensationRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * The data used to update CompensationRecords.
     */
    data: XOR<CompensationRecordUpdateManyMutationInput, CompensationRecordUncheckedUpdateManyInput>
    /**
     * Filter which CompensationRecords to update
     */
    where?: CompensationRecordWhereInput
    /**
     * Limit how many CompensationRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompensationRecord upsert
   */
  export type CompensationRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the CompensationRecord to update in case it exists.
     */
    where: CompensationRecordWhereUniqueInput
    /**
     * In case the CompensationRecord found by the `where` argument doesn't exist, create a new CompensationRecord with this data.
     */
    create: XOR<CompensationRecordCreateInput, CompensationRecordUncheckedCreateInput>
    /**
     * In case the CompensationRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompensationRecordUpdateInput, CompensationRecordUncheckedUpdateInput>
  }

  /**
   * CompensationRecord delete
   */
  export type CompensationRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
    /**
     * Filter which CompensationRecord to delete.
     */
    where: CompensationRecordWhereUniqueInput
  }

  /**
   * CompensationRecord deleteMany
   */
  export type CompensationRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompensationRecords to delete
     */
    where?: CompensationRecordWhereInput
    /**
     * Limit how many CompensationRecords to delete.
     */
    limit?: number
  }

  /**
   * CompensationRecord without action
   */
  export type CompensationRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompensationRecord
     */
    select?: CompensationRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompensationRecord
     */
    omit?: CompensationRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompensationRecordInclude<ExtArgs> | null
  }


  /**
   * Model InventoryRecord
   */

  export type AggregateInventoryRecord = {
    _count: InventoryRecordCountAggregateOutputType | null
    _avg: InventoryRecordAvgAggregateOutputType | null
    _sum: InventoryRecordSumAggregateOutputType | null
    _min: InventoryRecordMinAggregateOutputType | null
    _max: InventoryRecordMaxAggregateOutputType | null
  }

  export type InventoryRecordAvgAggregateOutputType = {
    quantityChange: number | null
  }

  export type InventoryRecordSumAggregateOutputType = {
    quantityChange: number | null
  }

  export type InventoryRecordMinAggregateOutputType = {
    id: string | null
    skuCode: string | null
    warehouseId: string | null
    quantityChange: number | null
    changeType: string | null
    ticketId: string | null
    approvalRecordId: string | null
    operator: string | null
    remark: string | null
    createdAt: Date | null
  }

  export type InventoryRecordMaxAggregateOutputType = {
    id: string | null
    skuCode: string | null
    warehouseId: string | null
    quantityChange: number | null
    changeType: string | null
    ticketId: string | null
    approvalRecordId: string | null
    operator: string | null
    remark: string | null
    createdAt: Date | null
  }

  export type InventoryRecordCountAggregateOutputType = {
    id: number
    skuCode: number
    warehouseId: number
    quantityChange: number
    changeType: number
    ticketId: number
    approvalRecordId: number
    operator: number
    remark: number
    createdAt: number
    _all: number
  }


  export type InventoryRecordAvgAggregateInputType = {
    quantityChange?: true
  }

  export type InventoryRecordSumAggregateInputType = {
    quantityChange?: true
  }

  export type InventoryRecordMinAggregateInputType = {
    id?: true
    skuCode?: true
    warehouseId?: true
    quantityChange?: true
    changeType?: true
    ticketId?: true
    approvalRecordId?: true
    operator?: true
    remark?: true
    createdAt?: true
  }

  export type InventoryRecordMaxAggregateInputType = {
    id?: true
    skuCode?: true
    warehouseId?: true
    quantityChange?: true
    changeType?: true
    ticketId?: true
    approvalRecordId?: true
    operator?: true
    remark?: true
    createdAt?: true
  }

  export type InventoryRecordCountAggregateInputType = {
    id?: true
    skuCode?: true
    warehouseId?: true
    quantityChange?: true
    changeType?: true
    ticketId?: true
    approvalRecordId?: true
    operator?: true
    remark?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryRecord to aggregate.
     */
    where?: InventoryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryRecords to fetch.
     */
    orderBy?: InventoryRecordOrderByWithRelationInput | InventoryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryRecords
    **/
    _count?: true | InventoryRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryRecordMaxAggregateInputType
  }

  export type GetInventoryRecordAggregateType<T extends InventoryRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryRecord[P]>
      : GetScalarType<T[P], AggregateInventoryRecord[P]>
  }




  export type InventoryRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryRecordWhereInput
    orderBy?: InventoryRecordOrderByWithAggregationInput | InventoryRecordOrderByWithAggregationInput[]
    by: InventoryRecordScalarFieldEnum[] | InventoryRecordScalarFieldEnum
    having?: InventoryRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryRecordCountAggregateInputType | true
    _avg?: InventoryRecordAvgAggregateInputType
    _sum?: InventoryRecordSumAggregateInputType
    _min?: InventoryRecordMinAggregateInputType
    _max?: InventoryRecordMaxAggregateInputType
  }

  export type InventoryRecordGroupByOutputType = {
    id: string
    skuCode: string
    warehouseId: string
    quantityChange: number
    changeType: string
    ticketId: string | null
    approvalRecordId: string | null
    operator: string
    remark: string
    createdAt: Date
    _count: InventoryRecordCountAggregateOutputType | null
    _avg: InventoryRecordAvgAggregateOutputType | null
    _sum: InventoryRecordSumAggregateOutputType | null
    _min: InventoryRecordMinAggregateOutputType | null
    _max: InventoryRecordMaxAggregateOutputType | null
  }

  type GetInventoryRecordGroupByPayload<T extends InventoryRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryRecordGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryRecordGroupByOutputType[P]>
        }
      >
    >


  export type InventoryRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skuCode?: boolean
    warehouseId?: boolean
    quantityChange?: boolean
    changeType?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    operator?: boolean
    remark?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inventoryRecord"]>

  export type InventoryRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skuCode?: boolean
    warehouseId?: boolean
    quantityChange?: boolean
    changeType?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    operator?: boolean
    remark?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inventoryRecord"]>

  export type InventoryRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    skuCode?: boolean
    warehouseId?: boolean
    quantityChange?: boolean
    changeType?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    operator?: boolean
    remark?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["inventoryRecord"]>

  export type InventoryRecordSelectScalar = {
    id?: boolean
    skuCode?: boolean
    warehouseId?: boolean
    quantityChange?: boolean
    changeType?: boolean
    ticketId?: boolean
    approvalRecordId?: boolean
    operator?: boolean
    remark?: boolean
    createdAt?: boolean
  }

  export type InventoryRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "skuCode" | "warehouseId" | "quantityChange" | "changeType" | "ticketId" | "approvalRecordId" | "operator" | "remark" | "createdAt", ExtArgs["result"]["inventoryRecord"]>

  export type $InventoryRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      skuCode: string
      warehouseId: string
      quantityChange: number
      changeType: string
      ticketId: string | null
      approvalRecordId: string | null
      operator: string
      remark: string
      createdAt: Date
    }, ExtArgs["result"]["inventoryRecord"]>
    composites: {}
  }

  type InventoryRecordGetPayload<S extends boolean | null | undefined | InventoryRecordDefaultArgs> = $Result.GetResult<Prisma.$InventoryRecordPayload, S>

  type InventoryRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryRecordCountAggregateInputType | true
    }

  export interface InventoryRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryRecord'], meta: { name: 'InventoryRecord' } }
    /**
     * Find zero or one InventoryRecord that matches the filter.
     * @param {InventoryRecordFindUniqueArgs} args - Arguments to find a InventoryRecord
     * @example
     * // Get one InventoryRecord
     * const inventoryRecord = await prisma.inventoryRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryRecordFindUniqueArgs>(args: SelectSubset<T, InventoryRecordFindUniqueArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryRecordFindUniqueOrThrowArgs} args - Arguments to find a InventoryRecord
     * @example
     * // Get one InventoryRecord
     * const inventoryRecord = await prisma.inventoryRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordFindFirstArgs} args - Arguments to find a InventoryRecord
     * @example
     * // Get one InventoryRecord
     * const inventoryRecord = await prisma.inventoryRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryRecordFindFirstArgs>(args?: SelectSubset<T, InventoryRecordFindFirstArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordFindFirstOrThrowArgs} args - Arguments to find a InventoryRecord
     * @example
     * // Get one InventoryRecord
     * const inventoryRecord = await prisma.inventoryRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryRecords
     * const inventoryRecords = await prisma.inventoryRecord.findMany()
     * 
     * // Get first 10 InventoryRecords
     * const inventoryRecords = await prisma.inventoryRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryRecordWithIdOnly = await prisma.inventoryRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryRecordFindManyArgs>(args?: SelectSubset<T, InventoryRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryRecord.
     * @param {InventoryRecordCreateArgs} args - Arguments to create a InventoryRecord.
     * @example
     * // Create one InventoryRecord
     * const InventoryRecord = await prisma.inventoryRecord.create({
     *   data: {
     *     // ... data to create a InventoryRecord
     *   }
     * })
     * 
     */
    create<T extends InventoryRecordCreateArgs>(args: SelectSubset<T, InventoryRecordCreateArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryRecords.
     * @param {InventoryRecordCreateManyArgs} args - Arguments to create many InventoryRecords.
     * @example
     * // Create many InventoryRecords
     * const inventoryRecord = await prisma.inventoryRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryRecordCreateManyArgs>(args?: SelectSubset<T, InventoryRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryRecords and returns the data saved in the database.
     * @param {InventoryRecordCreateManyAndReturnArgs} args - Arguments to create many InventoryRecords.
     * @example
     * // Create many InventoryRecords
     * const inventoryRecord = await prisma.inventoryRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryRecords and only return the `id`
     * const inventoryRecordWithIdOnly = await prisma.inventoryRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryRecord.
     * @param {InventoryRecordDeleteArgs} args - Arguments to delete one InventoryRecord.
     * @example
     * // Delete one InventoryRecord
     * const InventoryRecord = await prisma.inventoryRecord.delete({
     *   where: {
     *     // ... filter to delete one InventoryRecord
     *   }
     * })
     * 
     */
    delete<T extends InventoryRecordDeleteArgs>(args: SelectSubset<T, InventoryRecordDeleteArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryRecord.
     * @param {InventoryRecordUpdateArgs} args - Arguments to update one InventoryRecord.
     * @example
     * // Update one InventoryRecord
     * const inventoryRecord = await prisma.inventoryRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryRecordUpdateArgs>(args: SelectSubset<T, InventoryRecordUpdateArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryRecords.
     * @param {InventoryRecordDeleteManyArgs} args - Arguments to filter InventoryRecords to delete.
     * @example
     * // Delete a few InventoryRecords
     * const { count } = await prisma.inventoryRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryRecordDeleteManyArgs>(args?: SelectSubset<T, InventoryRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryRecords
     * const inventoryRecord = await prisma.inventoryRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryRecordUpdateManyArgs>(args: SelectSubset<T, InventoryRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryRecords and returns the data updated in the database.
     * @param {InventoryRecordUpdateManyAndReturnArgs} args - Arguments to update many InventoryRecords.
     * @example
     * // Update many InventoryRecords
     * const inventoryRecord = await prisma.inventoryRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryRecords and only return the `id`
     * const inventoryRecordWithIdOnly = await prisma.inventoryRecord.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryRecord.
     * @param {InventoryRecordUpsertArgs} args - Arguments to update or create a InventoryRecord.
     * @example
     * // Update or create a InventoryRecord
     * const inventoryRecord = await prisma.inventoryRecord.upsert({
     *   create: {
     *     // ... data to create a InventoryRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryRecord we want to update
     *   }
     * })
     */
    upsert<T extends InventoryRecordUpsertArgs>(args: SelectSubset<T, InventoryRecordUpsertArgs<ExtArgs>>): Prisma__InventoryRecordClient<$Result.GetResult<Prisma.$InventoryRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordCountArgs} args - Arguments to filter InventoryRecords to count.
     * @example
     * // Count the number of InventoryRecords
     * const count = await prisma.inventoryRecord.count({
     *   where: {
     *     // ... the filter for the InventoryRecords we want to count
     *   }
     * })
    **/
    count<T extends InventoryRecordCountArgs>(
      args?: Subset<T, InventoryRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryRecordAggregateArgs>(args: Subset<T, InventoryRecordAggregateArgs>): Prisma.PrismaPromise<GetInventoryRecordAggregateType<T>>

    /**
     * Group by InventoryRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryRecordGroupByArgs['orderBy'] }
        : { orderBy?: InventoryRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryRecord model
   */
  readonly fields: InventoryRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryRecord model
   */
  interface InventoryRecordFieldRefs {
    readonly id: FieldRef<"InventoryRecord", 'String'>
    readonly skuCode: FieldRef<"InventoryRecord", 'String'>
    readonly warehouseId: FieldRef<"InventoryRecord", 'String'>
    readonly quantityChange: FieldRef<"InventoryRecord", 'Int'>
    readonly changeType: FieldRef<"InventoryRecord", 'String'>
    readonly ticketId: FieldRef<"InventoryRecord", 'String'>
    readonly approvalRecordId: FieldRef<"InventoryRecord", 'String'>
    readonly operator: FieldRef<"InventoryRecord", 'String'>
    readonly remark: FieldRef<"InventoryRecord", 'String'>
    readonly createdAt: FieldRef<"InventoryRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InventoryRecord findUnique
   */
  export type InventoryRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * Filter, which InventoryRecord to fetch.
     */
    where: InventoryRecordWhereUniqueInput
  }

  /**
   * InventoryRecord findUniqueOrThrow
   */
  export type InventoryRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * Filter, which InventoryRecord to fetch.
     */
    where: InventoryRecordWhereUniqueInput
  }

  /**
   * InventoryRecord findFirst
   */
  export type InventoryRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * Filter, which InventoryRecord to fetch.
     */
    where?: InventoryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryRecords to fetch.
     */
    orderBy?: InventoryRecordOrderByWithRelationInput | InventoryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryRecords.
     */
    cursor?: InventoryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryRecords.
     */
    distinct?: InventoryRecordScalarFieldEnum | InventoryRecordScalarFieldEnum[]
  }

  /**
   * InventoryRecord findFirstOrThrow
   */
  export type InventoryRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * Filter, which InventoryRecord to fetch.
     */
    where?: InventoryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryRecords to fetch.
     */
    orderBy?: InventoryRecordOrderByWithRelationInput | InventoryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryRecords.
     */
    cursor?: InventoryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryRecords.
     */
    distinct?: InventoryRecordScalarFieldEnum | InventoryRecordScalarFieldEnum[]
  }

  /**
   * InventoryRecord findMany
   */
  export type InventoryRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * Filter, which InventoryRecords to fetch.
     */
    where?: InventoryRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryRecords to fetch.
     */
    orderBy?: InventoryRecordOrderByWithRelationInput | InventoryRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryRecords.
     */
    cursor?: InventoryRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryRecords.
     */
    skip?: number
    distinct?: InventoryRecordScalarFieldEnum | InventoryRecordScalarFieldEnum[]
  }

  /**
   * InventoryRecord create
   */
  export type InventoryRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a InventoryRecord.
     */
    data: XOR<InventoryRecordCreateInput, InventoryRecordUncheckedCreateInput>
  }

  /**
   * InventoryRecord createMany
   */
  export type InventoryRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryRecords.
     */
    data: InventoryRecordCreateManyInput | InventoryRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryRecord createManyAndReturn
   */
  export type InventoryRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryRecords.
     */
    data: InventoryRecordCreateManyInput | InventoryRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InventoryRecord update
   */
  export type InventoryRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a InventoryRecord.
     */
    data: XOR<InventoryRecordUpdateInput, InventoryRecordUncheckedUpdateInput>
    /**
     * Choose, which InventoryRecord to update.
     */
    where: InventoryRecordWhereUniqueInput
  }

  /**
   * InventoryRecord updateMany
   */
  export type InventoryRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryRecords.
     */
    data: XOR<InventoryRecordUpdateManyMutationInput, InventoryRecordUncheckedUpdateManyInput>
    /**
     * Filter which InventoryRecords to update
     */
    where?: InventoryRecordWhereInput
    /**
     * Limit how many InventoryRecords to update.
     */
    limit?: number
  }

  /**
   * InventoryRecord updateManyAndReturn
   */
  export type InventoryRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * The data used to update InventoryRecords.
     */
    data: XOR<InventoryRecordUpdateManyMutationInput, InventoryRecordUncheckedUpdateManyInput>
    /**
     * Filter which InventoryRecords to update
     */
    where?: InventoryRecordWhereInput
    /**
     * Limit how many InventoryRecords to update.
     */
    limit?: number
  }

  /**
   * InventoryRecord upsert
   */
  export type InventoryRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the InventoryRecord to update in case it exists.
     */
    where: InventoryRecordWhereUniqueInput
    /**
     * In case the InventoryRecord found by the `where` argument doesn't exist, create a new InventoryRecord with this data.
     */
    create: XOR<InventoryRecordCreateInput, InventoryRecordUncheckedCreateInput>
    /**
     * In case the InventoryRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryRecordUpdateInput, InventoryRecordUncheckedUpdateInput>
  }

  /**
   * InventoryRecord delete
   */
  export type InventoryRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
    /**
     * Filter which InventoryRecord to delete.
     */
    where: InventoryRecordWhereUniqueInput
  }

  /**
   * InventoryRecord deleteMany
   */
  export type InventoryRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryRecords to delete
     */
    where?: InventoryRecordWhereInput
    /**
     * Limit how many InventoryRecords to delete.
     */
    limit?: number
  }

  /**
   * InventoryRecord without action
   */
  export type InventoryRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryRecord
     */
    select?: InventoryRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryRecord
     */
    omit?: InventoryRecordOmit<ExtArgs> | null
  }


  /**
   * Model QCRule
   */

  export type AggregateQCRule = {
    _count: QCRuleCountAggregateOutputType | null
    _avg: QCRuleAvgAggregateOutputType | null
    _sum: QCRuleSumAggregateOutputType | null
    _min: QCRuleMinAggregateOutputType | null
    _max: QCRuleMaxAggregateOutputType | null
  }

  export type QCRuleAvgAggregateOutputType = {
    autoApprovalLevel: number | null
  }

  export type QCRuleSumAggregateOutputType = {
    autoApprovalLevel: number | null
  }

  export type QCRuleMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    exceptionType: string | null
    severity: string | null
    autoCreateTicket: boolean | null
    autoApprovalLevel: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QCRuleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    exceptionType: string | null
    severity: string | null
    autoCreateTicket: boolean | null
    autoApprovalLevel: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QCRuleCountAggregateOutputType = {
    id: number
    name: number
    code: number
    description: number
    exceptionType: number
    triggerCondition: number
    severity: number
    autoCreateTicket: number
    autoApprovalLevel: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QCRuleAvgAggregateInputType = {
    autoApprovalLevel?: true
  }

  export type QCRuleSumAggregateInputType = {
    autoApprovalLevel?: true
  }

  export type QCRuleMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    exceptionType?: true
    severity?: true
    autoCreateTicket?: true
    autoApprovalLevel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QCRuleMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    exceptionType?: true
    severity?: true
    autoCreateTicket?: true
    autoApprovalLevel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QCRuleCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    exceptionType?: true
    triggerCondition?: true
    severity?: true
    autoCreateTicket?: true
    autoApprovalLevel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QCRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QCRule to aggregate.
     */
    where?: QCRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QCRules to fetch.
     */
    orderBy?: QCRuleOrderByWithRelationInput | QCRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QCRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QCRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QCRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QCRules
    **/
    _count?: true | QCRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QCRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QCRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QCRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QCRuleMaxAggregateInputType
  }

  export type GetQCRuleAggregateType<T extends QCRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateQCRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQCRule[P]>
      : GetScalarType<T[P], AggregateQCRule[P]>
  }




  export type QCRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QCRuleWhereInput
    orderBy?: QCRuleOrderByWithAggregationInput | QCRuleOrderByWithAggregationInput[]
    by: QCRuleScalarFieldEnum[] | QCRuleScalarFieldEnum
    having?: QCRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QCRuleCountAggregateInputType | true
    _avg?: QCRuleAvgAggregateInputType
    _sum?: QCRuleSumAggregateInputType
    _min?: QCRuleMinAggregateInputType
    _max?: QCRuleMaxAggregateInputType
  }

  export type QCRuleGroupByOutputType = {
    id: string
    name: string
    code: string
    description: string
    exceptionType: string
    triggerCondition: JsonValue
    severity: string
    autoCreateTicket: boolean
    autoApprovalLevel: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: QCRuleCountAggregateOutputType | null
    _avg: QCRuleAvgAggregateOutputType | null
    _sum: QCRuleSumAggregateOutputType | null
    _min: QCRuleMinAggregateOutputType | null
    _max: QCRuleMaxAggregateOutputType | null
  }

  type GetQCRuleGroupByPayload<T extends QCRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QCRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QCRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QCRuleGroupByOutputType[P]>
            : GetScalarType<T[P], QCRuleGroupByOutputType[P]>
        }
      >
    >


  export type QCRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    exceptionType?: boolean
    triggerCondition?: boolean
    severity?: boolean
    autoCreateTicket?: boolean
    autoApprovalLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["qCRule"]>

  export type QCRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    exceptionType?: boolean
    triggerCondition?: boolean
    severity?: boolean
    autoCreateTicket?: boolean
    autoApprovalLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["qCRule"]>

  export type QCRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    exceptionType?: boolean
    triggerCondition?: boolean
    severity?: boolean
    autoCreateTicket?: boolean
    autoApprovalLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["qCRule"]>

  export type QCRuleSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    exceptionType?: boolean
    triggerCondition?: boolean
    severity?: boolean
    autoCreateTicket?: boolean
    autoApprovalLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QCRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "description" | "exceptionType" | "triggerCondition" | "severity" | "autoCreateTicket" | "autoApprovalLevel" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["qCRule"]>

  export type $QCRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QCRule"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      description: string
      exceptionType: string
      triggerCondition: Prisma.JsonValue
      severity: string
      autoCreateTicket: boolean
      autoApprovalLevel: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["qCRule"]>
    composites: {}
  }

  type QCRuleGetPayload<S extends boolean | null | undefined | QCRuleDefaultArgs> = $Result.GetResult<Prisma.$QCRulePayload, S>

  type QCRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QCRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QCRuleCountAggregateInputType | true
    }

  export interface QCRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QCRule'], meta: { name: 'QCRule' } }
    /**
     * Find zero or one QCRule that matches the filter.
     * @param {QCRuleFindUniqueArgs} args - Arguments to find a QCRule
     * @example
     * // Get one QCRule
     * const qCRule = await prisma.qCRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QCRuleFindUniqueArgs>(args: SelectSubset<T, QCRuleFindUniqueArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QCRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QCRuleFindUniqueOrThrowArgs} args - Arguments to find a QCRule
     * @example
     * // Get one QCRule
     * const qCRule = await prisma.qCRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QCRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, QCRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QCRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleFindFirstArgs} args - Arguments to find a QCRule
     * @example
     * // Get one QCRule
     * const qCRule = await prisma.qCRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QCRuleFindFirstArgs>(args?: SelectSubset<T, QCRuleFindFirstArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QCRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleFindFirstOrThrowArgs} args - Arguments to find a QCRule
     * @example
     * // Get one QCRule
     * const qCRule = await prisma.qCRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QCRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, QCRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QCRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QCRules
     * const qCRules = await prisma.qCRule.findMany()
     * 
     * // Get first 10 QCRules
     * const qCRules = await prisma.qCRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const qCRuleWithIdOnly = await prisma.qCRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QCRuleFindManyArgs>(args?: SelectSubset<T, QCRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QCRule.
     * @param {QCRuleCreateArgs} args - Arguments to create a QCRule.
     * @example
     * // Create one QCRule
     * const QCRule = await prisma.qCRule.create({
     *   data: {
     *     // ... data to create a QCRule
     *   }
     * })
     * 
     */
    create<T extends QCRuleCreateArgs>(args: SelectSubset<T, QCRuleCreateArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QCRules.
     * @param {QCRuleCreateManyArgs} args - Arguments to create many QCRules.
     * @example
     * // Create many QCRules
     * const qCRule = await prisma.qCRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QCRuleCreateManyArgs>(args?: SelectSubset<T, QCRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QCRules and returns the data saved in the database.
     * @param {QCRuleCreateManyAndReturnArgs} args - Arguments to create many QCRules.
     * @example
     * // Create many QCRules
     * const qCRule = await prisma.qCRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QCRules and only return the `id`
     * const qCRuleWithIdOnly = await prisma.qCRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QCRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, QCRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QCRule.
     * @param {QCRuleDeleteArgs} args - Arguments to delete one QCRule.
     * @example
     * // Delete one QCRule
     * const QCRule = await prisma.qCRule.delete({
     *   where: {
     *     // ... filter to delete one QCRule
     *   }
     * })
     * 
     */
    delete<T extends QCRuleDeleteArgs>(args: SelectSubset<T, QCRuleDeleteArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QCRule.
     * @param {QCRuleUpdateArgs} args - Arguments to update one QCRule.
     * @example
     * // Update one QCRule
     * const qCRule = await prisma.qCRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QCRuleUpdateArgs>(args: SelectSubset<T, QCRuleUpdateArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QCRules.
     * @param {QCRuleDeleteManyArgs} args - Arguments to filter QCRules to delete.
     * @example
     * // Delete a few QCRules
     * const { count } = await prisma.qCRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QCRuleDeleteManyArgs>(args?: SelectSubset<T, QCRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QCRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QCRules
     * const qCRule = await prisma.qCRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QCRuleUpdateManyArgs>(args: SelectSubset<T, QCRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QCRules and returns the data updated in the database.
     * @param {QCRuleUpdateManyAndReturnArgs} args - Arguments to update many QCRules.
     * @example
     * // Update many QCRules
     * const qCRule = await prisma.qCRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QCRules and only return the `id`
     * const qCRuleWithIdOnly = await prisma.qCRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QCRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, QCRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QCRule.
     * @param {QCRuleUpsertArgs} args - Arguments to update or create a QCRule.
     * @example
     * // Update or create a QCRule
     * const qCRule = await prisma.qCRule.upsert({
     *   create: {
     *     // ... data to create a QCRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QCRule we want to update
     *   }
     * })
     */
    upsert<T extends QCRuleUpsertArgs>(args: SelectSubset<T, QCRuleUpsertArgs<ExtArgs>>): Prisma__QCRuleClient<$Result.GetResult<Prisma.$QCRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QCRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleCountArgs} args - Arguments to filter QCRules to count.
     * @example
     * // Count the number of QCRules
     * const count = await prisma.qCRule.count({
     *   where: {
     *     // ... the filter for the QCRules we want to count
     *   }
     * })
    **/
    count<T extends QCRuleCountArgs>(
      args?: Subset<T, QCRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QCRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QCRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QCRuleAggregateArgs>(args: Subset<T, QCRuleAggregateArgs>): Prisma.PrismaPromise<GetQCRuleAggregateType<T>>

    /**
     * Group by QCRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QCRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QCRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QCRuleGroupByArgs['orderBy'] }
        : { orderBy?: QCRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QCRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQCRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QCRule model
   */
  readonly fields: QCRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QCRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QCRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QCRule model
   */
  interface QCRuleFieldRefs {
    readonly id: FieldRef<"QCRule", 'String'>
    readonly name: FieldRef<"QCRule", 'String'>
    readonly code: FieldRef<"QCRule", 'String'>
    readonly description: FieldRef<"QCRule", 'String'>
    readonly exceptionType: FieldRef<"QCRule", 'String'>
    readonly triggerCondition: FieldRef<"QCRule", 'Json'>
    readonly severity: FieldRef<"QCRule", 'String'>
    readonly autoCreateTicket: FieldRef<"QCRule", 'Boolean'>
    readonly autoApprovalLevel: FieldRef<"QCRule", 'Int'>
    readonly isActive: FieldRef<"QCRule", 'Boolean'>
    readonly createdAt: FieldRef<"QCRule", 'DateTime'>
    readonly updatedAt: FieldRef<"QCRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QCRule findUnique
   */
  export type QCRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * Filter, which QCRule to fetch.
     */
    where: QCRuleWhereUniqueInput
  }

  /**
   * QCRule findUniqueOrThrow
   */
  export type QCRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * Filter, which QCRule to fetch.
     */
    where: QCRuleWhereUniqueInput
  }

  /**
   * QCRule findFirst
   */
  export type QCRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * Filter, which QCRule to fetch.
     */
    where?: QCRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QCRules to fetch.
     */
    orderBy?: QCRuleOrderByWithRelationInput | QCRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QCRules.
     */
    cursor?: QCRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QCRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QCRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QCRules.
     */
    distinct?: QCRuleScalarFieldEnum | QCRuleScalarFieldEnum[]
  }

  /**
   * QCRule findFirstOrThrow
   */
  export type QCRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * Filter, which QCRule to fetch.
     */
    where?: QCRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QCRules to fetch.
     */
    orderBy?: QCRuleOrderByWithRelationInput | QCRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QCRules.
     */
    cursor?: QCRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QCRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QCRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QCRules.
     */
    distinct?: QCRuleScalarFieldEnum | QCRuleScalarFieldEnum[]
  }

  /**
   * QCRule findMany
   */
  export type QCRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * Filter, which QCRules to fetch.
     */
    where?: QCRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QCRules to fetch.
     */
    orderBy?: QCRuleOrderByWithRelationInput | QCRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QCRules.
     */
    cursor?: QCRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QCRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QCRules.
     */
    skip?: number
    distinct?: QCRuleScalarFieldEnum | QCRuleScalarFieldEnum[]
  }

  /**
   * QCRule create
   */
  export type QCRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * The data needed to create a QCRule.
     */
    data: XOR<QCRuleCreateInput, QCRuleUncheckedCreateInput>
  }

  /**
   * QCRule createMany
   */
  export type QCRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QCRules.
     */
    data: QCRuleCreateManyInput | QCRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QCRule createManyAndReturn
   */
  export type QCRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * The data used to create many QCRules.
     */
    data: QCRuleCreateManyInput | QCRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QCRule update
   */
  export type QCRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * The data needed to update a QCRule.
     */
    data: XOR<QCRuleUpdateInput, QCRuleUncheckedUpdateInput>
    /**
     * Choose, which QCRule to update.
     */
    where: QCRuleWhereUniqueInput
  }

  /**
   * QCRule updateMany
   */
  export type QCRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QCRules.
     */
    data: XOR<QCRuleUpdateManyMutationInput, QCRuleUncheckedUpdateManyInput>
    /**
     * Filter which QCRules to update
     */
    where?: QCRuleWhereInput
    /**
     * Limit how many QCRules to update.
     */
    limit?: number
  }

  /**
   * QCRule updateManyAndReturn
   */
  export type QCRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * The data used to update QCRules.
     */
    data: XOR<QCRuleUpdateManyMutationInput, QCRuleUncheckedUpdateManyInput>
    /**
     * Filter which QCRules to update
     */
    where?: QCRuleWhereInput
    /**
     * Limit how many QCRules to update.
     */
    limit?: number
  }

  /**
   * QCRule upsert
   */
  export type QCRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * The filter to search for the QCRule to update in case it exists.
     */
    where: QCRuleWhereUniqueInput
    /**
     * In case the QCRule found by the `where` argument doesn't exist, create a new QCRule with this data.
     */
    create: XOR<QCRuleCreateInput, QCRuleUncheckedCreateInput>
    /**
     * In case the QCRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QCRuleUpdateInput, QCRuleUncheckedUpdateInput>
  }

  /**
   * QCRule delete
   */
  export type QCRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
    /**
     * Filter which QCRule to delete.
     */
    where: QCRuleWhereUniqueInput
  }

  /**
   * QCRule deleteMany
   */
  export type QCRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QCRules to delete
     */
    where?: QCRuleWhereInput
    /**
     * Limit how many QCRules to delete.
     */
    limit?: number
  }

  /**
   * QCRule without action
   */
  export type QCRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QCRule
     */
    select?: QCRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QCRule
     */
    omit?: QCRuleOmit<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    description: string | null
    category: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    configKey: string | null
    configValue: string | null
    configType: string | null
    description: string | null
    category: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    configKey: number
    configValue: number
    configType: number
    description: number
    category: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemConfigMinAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    configType?: true
    description?: true
    category?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    configType?: true
    description?: true
    category?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    configKey?: true
    configValue?: true
    configType?: true
    description?: true
    category?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    configKey: string
    configValue: string
    configType: string
    description: string | null
    category: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SystemConfigCountAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemConfig"]>

  export type SystemConfigSelectScalar = {
    id?: boolean
    configKey?: boolean
    configValue?: boolean
    configType?: boolean
    description?: boolean
    category?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "configKey" | "configValue" | "configType" | "description" | "category" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["systemConfig"]>

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      configKey: string
      configValue: string
      configType: string
      description: string | null
      category: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemConfigs and returns the data saved in the database.
     * @param {SystemConfigCreateManyAndReturnArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs and returns the data updated in the database.
     * @param {SystemConfigUpdateManyAndReturnArgs} args - Arguments to update many SystemConfigs.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemConfigs and only return the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SystemConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly configKey: FieldRef<"SystemConfig", 'String'>
    readonly configValue: FieldRef<"SystemConfig", 'String'>
    readonly configType: FieldRef<"SystemConfig", 'String'>
    readonly description: FieldRef<"SystemConfig", 'String'>
    readonly category: FieldRef<"SystemConfig", 'String'>
    readonly isActive: FieldRef<"SystemConfig", 'Boolean'>
    readonly createdAt: FieldRef<"SystemConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig createManyAndReturn
   */
  export type SystemConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig updateManyAndReturn
   */
  export type SystemConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to update.
     */
    limit?: number
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
    /**
     * Limit how many SystemConfigs to delete.
     */
    limit?: number
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemConfig
     */
    omit?: SystemConfigOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrderSnapshotScalarFieldEnum: {
    id: 'id',
    v2OrderId: 'v2OrderId',
    externalCode: 'externalCode',
    storeName: 'storeName',
    receiverName: 'receiverName',
    receiverPhone: 'receiverPhone',
    receiverAddress: 'receiverAddress',
    amount: 'amount',
    itemsJson: 'itemsJson',
    syncedAt: 'syncedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderSnapshotScalarFieldEnum = (typeof OrderSnapshotScalarFieldEnum)[keyof typeof OrderSnapshotScalarFieldEnum]


  export const SyncLogScalarFieldEnum: {
    id: 'id',
    apiName: 'apiName',
    requestParams: 'requestParams',
    responseStatus: 'responseStatus',
    responseBody: 'responseBody',
    status: 'status',
    errorMessage: 'errorMessage',
    duration: 'duration',
    createdAt: 'createdAt'
  };

  export type SyncLogScalarFieldEnum = (typeof SyncLogScalarFieldEnum)[keyof typeof SyncLogScalarFieldEnum]


  export const ScanRecordScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    orderSnapshotId: 'orderSnapshotId',
    skuCode: 'skuCode',
    skuName: 'skuName',
    scannedQuantity: 'scannedQuantity',
    scanTime: 'scanTime',
    operator: 'operator',
    deviceId: 'deviceId',
    qcResult: 'qcResult',
    qcRuleId: 'qcRuleId',
    qcRuleName: 'qcRuleName',
    qcDescription: 'qcDescription',
    batchStatus: 'batchStatus',
    ticketId: 'ticketId',
    createdAt: 'createdAt'
  };

  export type ScanRecordScalarFieldEnum = (typeof ScanRecordScalarFieldEnum)[keyof typeof ScanRecordScalarFieldEnum]


  export const ExceptionTicketScalarFieldEnum: {
    id: 'id',
    ticketNo: 'ticketNo',
    orderSnapshotId: 'orderSnapshotId',
    exceptionType: 'exceptionType',
    source: 'source',
    category: 'category',
    description: 'description',
    status: 'status',
    priority: 'priority',
    currentApprovalLevel: 'currentApprovalLevel',
    resubmitCount: 'resubmitCount',
    maxResubmitCount: 'maxResubmitCount',
    submittedBy: 'submittedBy',
    submittedAt: 'submittedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExceptionTicketScalarFieldEnum = (typeof ExceptionTicketScalarFieldEnum)[keyof typeof ExceptionTicketScalarFieldEnum]


  export const ApprovalRecordScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    approvalLevel: 'approvalLevel',
    approverId: 'approverId',
    approverName: 'approverName',
    action: 'action',
    comment: 'comment',
    approvedAt: 'approvedAt',
    createdAt: 'createdAt'
  };

  export type ApprovalRecordScalarFieldEnum = (typeof ApprovalRecordScalarFieldEnum)[keyof typeof ApprovalRecordScalarFieldEnum]


  export const CompensationRecordScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    approvalRecordId: 'approvalRecordId',
    amount: 'amount',
    direction: 'direction',
    status: 'status',
    reason: 'reason',
    paymentMethod: 'paymentMethod',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompensationRecordScalarFieldEnum = (typeof CompensationRecordScalarFieldEnum)[keyof typeof CompensationRecordScalarFieldEnum]


  export const InventoryRecordScalarFieldEnum: {
    id: 'id',
    skuCode: 'skuCode',
    warehouseId: 'warehouseId',
    quantityChange: 'quantityChange',
    changeType: 'changeType',
    ticketId: 'ticketId',
    approvalRecordId: 'approvalRecordId',
    operator: 'operator',
    remark: 'remark',
    createdAt: 'createdAt'
  };

  export type InventoryRecordScalarFieldEnum = (typeof InventoryRecordScalarFieldEnum)[keyof typeof InventoryRecordScalarFieldEnum]


  export const QCRuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    exceptionType: 'exceptionType',
    triggerCondition: 'triggerCondition',
    severity: 'severity',
    autoCreateTicket: 'autoCreateTicket',
    autoApprovalLevel: 'autoApprovalLevel',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QCRuleScalarFieldEnum = (typeof QCRuleScalarFieldEnum)[keyof typeof QCRuleScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    configKey: 'configKey',
    configValue: 'configValue',
    configType: 'configType',
    description: 'description',
    category: 'category',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type OrderSnapshotWhereInput = {
    AND?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    OR?: OrderSnapshotWhereInput[]
    NOT?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    id?: StringFilter<"OrderSnapshot"> | string
    v2OrderId?: StringFilter<"OrderSnapshot"> | string
    externalCode?: StringNullableFilter<"OrderSnapshot"> | string | null
    storeName?: StringNullableFilter<"OrderSnapshot"> | string | null
    receiverName?: StringNullableFilter<"OrderSnapshot"> | string | null
    receiverPhone?: StringNullableFilter<"OrderSnapshot"> | string | null
    receiverAddress?: StringNullableFilter<"OrderSnapshot"> | string | null
    amount?: FloatNullableFilter<"OrderSnapshot"> | number | null
    itemsJson?: JsonFilter<"OrderSnapshot">
    syncedAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    createdAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    exceptionTickets?: ExceptionTicketListRelationFilter
    scanRecords?: ScanRecordListRelationFilter
  }

  export type OrderSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    v2OrderId?: SortOrder
    externalCode?: SortOrderInput | SortOrder
    storeName?: SortOrderInput | SortOrder
    receiverName?: SortOrderInput | SortOrder
    receiverPhone?: SortOrderInput | SortOrder
    receiverAddress?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    itemsJson?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    exceptionTickets?: ExceptionTicketOrderByRelationAggregateInput
    scanRecords?: ScanRecordOrderByRelationAggregateInput
  }

  export type OrderSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    v2OrderId?: string
    AND?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    OR?: OrderSnapshotWhereInput[]
    NOT?: OrderSnapshotWhereInput | OrderSnapshotWhereInput[]
    externalCode?: StringNullableFilter<"OrderSnapshot"> | string | null
    storeName?: StringNullableFilter<"OrderSnapshot"> | string | null
    receiverName?: StringNullableFilter<"OrderSnapshot"> | string | null
    receiverPhone?: StringNullableFilter<"OrderSnapshot"> | string | null
    receiverAddress?: StringNullableFilter<"OrderSnapshot"> | string | null
    amount?: FloatNullableFilter<"OrderSnapshot"> | number | null
    itemsJson?: JsonFilter<"OrderSnapshot">
    syncedAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    createdAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    updatedAt?: DateTimeFilter<"OrderSnapshot"> | Date | string
    exceptionTickets?: ExceptionTicketListRelationFilter
    scanRecords?: ScanRecordListRelationFilter
  }, "id" | "v2OrderId">

  export type OrderSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    v2OrderId?: SortOrder
    externalCode?: SortOrderInput | SortOrder
    storeName?: SortOrderInput | SortOrder
    receiverName?: SortOrderInput | SortOrder
    receiverPhone?: SortOrderInput | SortOrder
    receiverAddress?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    itemsJson?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderSnapshotCountOrderByAggregateInput
    _avg?: OrderSnapshotAvgOrderByAggregateInput
    _max?: OrderSnapshotMaxOrderByAggregateInput
    _min?: OrderSnapshotMinOrderByAggregateInput
    _sum?: OrderSnapshotSumOrderByAggregateInput
  }

  export type OrderSnapshotScalarWhereWithAggregatesInput = {
    AND?: OrderSnapshotScalarWhereWithAggregatesInput | OrderSnapshotScalarWhereWithAggregatesInput[]
    OR?: OrderSnapshotScalarWhereWithAggregatesInput[]
    NOT?: OrderSnapshotScalarWhereWithAggregatesInput | OrderSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderSnapshot"> | string
    v2OrderId?: StringWithAggregatesFilter<"OrderSnapshot"> | string
    externalCode?: StringNullableWithAggregatesFilter<"OrderSnapshot"> | string | null
    storeName?: StringNullableWithAggregatesFilter<"OrderSnapshot"> | string | null
    receiverName?: StringNullableWithAggregatesFilter<"OrderSnapshot"> | string | null
    receiverPhone?: StringNullableWithAggregatesFilter<"OrderSnapshot"> | string | null
    receiverAddress?: StringNullableWithAggregatesFilter<"OrderSnapshot"> | string | null
    amount?: FloatNullableWithAggregatesFilter<"OrderSnapshot"> | number | null
    itemsJson?: JsonWithAggregatesFilter<"OrderSnapshot">
    syncedAt?: DateTimeWithAggregatesFilter<"OrderSnapshot"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"OrderSnapshot"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderSnapshot"> | Date | string
  }

  export type SyncLogWhereInput = {
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    id?: StringFilter<"SyncLog"> | string
    apiName?: StringFilter<"SyncLog"> | string
    requestParams?: JsonFilter<"SyncLog">
    responseStatus?: IntFilter<"SyncLog"> | number
    responseBody?: StringNullableFilter<"SyncLog"> | string | null
    status?: StringFilter<"SyncLog"> | string
    errorMessage?: StringNullableFilter<"SyncLog"> | string | null
    duration?: IntFilter<"SyncLog"> | number
    createdAt?: DateTimeFilter<"SyncLog"> | Date | string
  }

  export type SyncLogOrderByWithRelationInput = {
    id?: SortOrder
    apiName?: SortOrder
    requestParams?: SortOrder
    responseStatus?: SortOrder
    responseBody?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SyncLogWhereInput | SyncLogWhereInput[]
    OR?: SyncLogWhereInput[]
    NOT?: SyncLogWhereInput | SyncLogWhereInput[]
    apiName?: StringFilter<"SyncLog"> | string
    requestParams?: JsonFilter<"SyncLog">
    responseStatus?: IntFilter<"SyncLog"> | number
    responseBody?: StringNullableFilter<"SyncLog"> | string | null
    status?: StringFilter<"SyncLog"> | string
    errorMessage?: StringNullableFilter<"SyncLog"> | string | null
    duration?: IntFilter<"SyncLog"> | number
    createdAt?: DateTimeFilter<"SyncLog"> | Date | string
  }, "id">

  export type SyncLogOrderByWithAggregationInput = {
    id?: SortOrder
    apiName?: SortOrder
    requestParams?: SortOrder
    responseStatus?: SortOrder
    responseBody?: SortOrderInput | SortOrder
    status?: SortOrder
    errorMessage?: SortOrderInput | SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    _count?: SyncLogCountOrderByAggregateInput
    _avg?: SyncLogAvgOrderByAggregateInput
    _max?: SyncLogMaxOrderByAggregateInput
    _min?: SyncLogMinOrderByAggregateInput
    _sum?: SyncLogSumOrderByAggregateInput
  }

  export type SyncLogScalarWhereWithAggregatesInput = {
    AND?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    OR?: SyncLogScalarWhereWithAggregatesInput[]
    NOT?: SyncLogScalarWhereWithAggregatesInput | SyncLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SyncLog"> | string
    apiName?: StringWithAggregatesFilter<"SyncLog"> | string
    requestParams?: JsonWithAggregatesFilter<"SyncLog">
    responseStatus?: IntWithAggregatesFilter<"SyncLog"> | number
    responseBody?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
    status?: StringWithAggregatesFilter<"SyncLog"> | string
    errorMessage?: StringNullableWithAggregatesFilter<"SyncLog"> | string | null
    duration?: IntWithAggregatesFilter<"SyncLog"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SyncLog"> | Date | string
  }

  export type ScanRecordWhereInput = {
    AND?: ScanRecordWhereInput | ScanRecordWhereInput[]
    OR?: ScanRecordWhereInput[]
    NOT?: ScanRecordWhereInput | ScanRecordWhereInput[]
    id?: StringFilter<"ScanRecord"> | string
    scanId?: StringFilter<"ScanRecord"> | string
    orderSnapshotId?: StringFilter<"ScanRecord"> | string
    skuCode?: StringFilter<"ScanRecord"> | string
    skuName?: StringFilter<"ScanRecord"> | string
    scannedQuantity?: IntFilter<"ScanRecord"> | number
    scanTime?: DateTimeFilter<"ScanRecord"> | Date | string
    operator?: StringFilter<"ScanRecord"> | string
    deviceId?: StringNullableFilter<"ScanRecord"> | string | null
    qcResult?: StringFilter<"ScanRecord"> | string
    qcRuleId?: StringNullableFilter<"ScanRecord"> | string | null
    qcRuleName?: StringNullableFilter<"ScanRecord"> | string | null
    qcDescription?: StringNullableFilter<"ScanRecord"> | string | null
    batchStatus?: StringFilter<"ScanRecord"> | string
    ticketId?: StringNullableFilter<"ScanRecord"> | string | null
    createdAt?: DateTimeFilter<"ScanRecord"> | Date | string
    orderSnapshot?: XOR<OrderSnapshotScalarRelationFilter, OrderSnapshotWhereInput>
    ticket?: XOR<ExceptionTicketNullableScalarRelationFilter, ExceptionTicketWhereInput> | null
  }

  export type ScanRecordOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    orderSnapshotId?: SortOrder
    skuCode?: SortOrder
    skuName?: SortOrder
    scannedQuantity?: SortOrder
    scanTime?: SortOrder
    operator?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    qcResult?: SortOrder
    qcRuleId?: SortOrderInput | SortOrder
    qcRuleName?: SortOrderInput | SortOrder
    qcDescription?: SortOrderInput | SortOrder
    batchStatus?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    orderSnapshot?: OrderSnapshotOrderByWithRelationInput
    ticket?: ExceptionTicketOrderByWithRelationInput
  }

  export type ScanRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scanId?: string
    AND?: ScanRecordWhereInput | ScanRecordWhereInput[]
    OR?: ScanRecordWhereInput[]
    NOT?: ScanRecordWhereInput | ScanRecordWhereInput[]
    orderSnapshotId?: StringFilter<"ScanRecord"> | string
    skuCode?: StringFilter<"ScanRecord"> | string
    skuName?: StringFilter<"ScanRecord"> | string
    scannedQuantity?: IntFilter<"ScanRecord"> | number
    scanTime?: DateTimeFilter<"ScanRecord"> | Date | string
    operator?: StringFilter<"ScanRecord"> | string
    deviceId?: StringNullableFilter<"ScanRecord"> | string | null
    qcResult?: StringFilter<"ScanRecord"> | string
    qcRuleId?: StringNullableFilter<"ScanRecord"> | string | null
    qcRuleName?: StringNullableFilter<"ScanRecord"> | string | null
    qcDescription?: StringNullableFilter<"ScanRecord"> | string | null
    batchStatus?: StringFilter<"ScanRecord"> | string
    ticketId?: StringNullableFilter<"ScanRecord"> | string | null
    createdAt?: DateTimeFilter<"ScanRecord"> | Date | string
    orderSnapshot?: XOR<OrderSnapshotScalarRelationFilter, OrderSnapshotWhereInput>
    ticket?: XOR<ExceptionTicketNullableScalarRelationFilter, ExceptionTicketWhereInput> | null
  }, "id" | "scanId">

  export type ScanRecordOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    orderSnapshotId?: SortOrder
    skuCode?: SortOrder
    skuName?: SortOrder
    scannedQuantity?: SortOrder
    scanTime?: SortOrder
    operator?: SortOrder
    deviceId?: SortOrderInput | SortOrder
    qcResult?: SortOrder
    qcRuleId?: SortOrderInput | SortOrder
    qcRuleName?: SortOrderInput | SortOrder
    qcDescription?: SortOrderInput | SortOrder
    batchStatus?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ScanRecordCountOrderByAggregateInput
    _avg?: ScanRecordAvgOrderByAggregateInput
    _max?: ScanRecordMaxOrderByAggregateInput
    _min?: ScanRecordMinOrderByAggregateInput
    _sum?: ScanRecordSumOrderByAggregateInput
  }

  export type ScanRecordScalarWhereWithAggregatesInput = {
    AND?: ScanRecordScalarWhereWithAggregatesInput | ScanRecordScalarWhereWithAggregatesInput[]
    OR?: ScanRecordScalarWhereWithAggregatesInput[]
    NOT?: ScanRecordScalarWhereWithAggregatesInput | ScanRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScanRecord"> | string
    scanId?: StringWithAggregatesFilter<"ScanRecord"> | string
    orderSnapshotId?: StringWithAggregatesFilter<"ScanRecord"> | string
    skuCode?: StringWithAggregatesFilter<"ScanRecord"> | string
    skuName?: StringWithAggregatesFilter<"ScanRecord"> | string
    scannedQuantity?: IntWithAggregatesFilter<"ScanRecord"> | number
    scanTime?: DateTimeWithAggregatesFilter<"ScanRecord"> | Date | string
    operator?: StringWithAggregatesFilter<"ScanRecord"> | string
    deviceId?: StringNullableWithAggregatesFilter<"ScanRecord"> | string | null
    qcResult?: StringWithAggregatesFilter<"ScanRecord"> | string
    qcRuleId?: StringNullableWithAggregatesFilter<"ScanRecord"> | string | null
    qcRuleName?: StringNullableWithAggregatesFilter<"ScanRecord"> | string | null
    qcDescription?: StringNullableWithAggregatesFilter<"ScanRecord"> | string | null
    batchStatus?: StringWithAggregatesFilter<"ScanRecord"> | string
    ticketId?: StringNullableWithAggregatesFilter<"ScanRecord"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ScanRecord"> | Date | string
  }

  export type ExceptionTicketWhereInput = {
    AND?: ExceptionTicketWhereInput | ExceptionTicketWhereInput[]
    OR?: ExceptionTicketWhereInput[]
    NOT?: ExceptionTicketWhereInput | ExceptionTicketWhereInput[]
    id?: StringFilter<"ExceptionTicket"> | string
    ticketNo?: StringFilter<"ExceptionTicket"> | string
    orderSnapshotId?: StringFilter<"ExceptionTicket"> | string
    exceptionType?: StringFilter<"ExceptionTicket"> | string
    source?: StringFilter<"ExceptionTicket"> | string
    category?: StringFilter<"ExceptionTicket"> | string
    description?: StringFilter<"ExceptionTicket"> | string
    status?: StringFilter<"ExceptionTicket"> | string
    priority?: StringFilter<"ExceptionTicket"> | string
    currentApprovalLevel?: IntFilter<"ExceptionTicket"> | number
    resubmitCount?: IntFilter<"ExceptionTicket"> | number
    maxResubmitCount?: IntFilter<"ExceptionTicket"> | number
    submittedBy?: StringFilter<"ExceptionTicket"> | string
    submittedAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExceptionTicket"> | Date | string | null
    createdAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    orderSnapshot?: XOR<OrderSnapshotScalarRelationFilter, OrderSnapshotWhereInput>
    scanRecords?: ScanRecordListRelationFilter
    approvalRecords?: ApprovalRecordListRelationFilter
    compensationRecords?: CompensationRecordListRelationFilter
  }

  export type ExceptionTicketOrderByWithRelationInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    orderSnapshotId?: SortOrder
    exceptionType?: SortOrder
    source?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderSnapshot?: OrderSnapshotOrderByWithRelationInput
    scanRecords?: ScanRecordOrderByRelationAggregateInput
    approvalRecords?: ApprovalRecordOrderByRelationAggregateInput
    compensationRecords?: CompensationRecordOrderByRelationAggregateInput
  }

  export type ExceptionTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticketNo?: string
    AND?: ExceptionTicketWhereInput | ExceptionTicketWhereInput[]
    OR?: ExceptionTicketWhereInput[]
    NOT?: ExceptionTicketWhereInput | ExceptionTicketWhereInput[]
    orderSnapshotId?: StringFilter<"ExceptionTicket"> | string
    exceptionType?: StringFilter<"ExceptionTicket"> | string
    source?: StringFilter<"ExceptionTicket"> | string
    category?: StringFilter<"ExceptionTicket"> | string
    description?: StringFilter<"ExceptionTicket"> | string
    status?: StringFilter<"ExceptionTicket"> | string
    priority?: StringFilter<"ExceptionTicket"> | string
    currentApprovalLevel?: IntFilter<"ExceptionTicket"> | number
    resubmitCount?: IntFilter<"ExceptionTicket"> | number
    maxResubmitCount?: IntFilter<"ExceptionTicket"> | number
    submittedBy?: StringFilter<"ExceptionTicket"> | string
    submittedAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExceptionTicket"> | Date | string | null
    createdAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    orderSnapshot?: XOR<OrderSnapshotScalarRelationFilter, OrderSnapshotWhereInput>
    scanRecords?: ScanRecordListRelationFilter
    approvalRecords?: ApprovalRecordListRelationFilter
    compensationRecords?: CompensationRecordListRelationFilter
  }, "id" | "ticketNo">

  export type ExceptionTicketOrderByWithAggregationInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    orderSnapshotId?: SortOrder
    exceptionType?: SortOrder
    source?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExceptionTicketCountOrderByAggregateInput
    _avg?: ExceptionTicketAvgOrderByAggregateInput
    _max?: ExceptionTicketMaxOrderByAggregateInput
    _min?: ExceptionTicketMinOrderByAggregateInput
    _sum?: ExceptionTicketSumOrderByAggregateInput
  }

  export type ExceptionTicketScalarWhereWithAggregatesInput = {
    AND?: ExceptionTicketScalarWhereWithAggregatesInput | ExceptionTicketScalarWhereWithAggregatesInput[]
    OR?: ExceptionTicketScalarWhereWithAggregatesInput[]
    NOT?: ExceptionTicketScalarWhereWithAggregatesInput | ExceptionTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    ticketNo?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    orderSnapshotId?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    exceptionType?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    source?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    category?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    description?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    status?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    priority?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    currentApprovalLevel?: IntWithAggregatesFilter<"ExceptionTicket"> | number
    resubmitCount?: IntWithAggregatesFilter<"ExceptionTicket"> | number
    maxResubmitCount?: IntWithAggregatesFilter<"ExceptionTicket"> | number
    submittedBy?: StringWithAggregatesFilter<"ExceptionTicket"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"ExceptionTicket"> | Date | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"ExceptionTicket"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ExceptionTicket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ExceptionTicket"> | Date | string
  }

  export type ApprovalRecordWhereInput = {
    AND?: ApprovalRecordWhereInput | ApprovalRecordWhereInput[]
    OR?: ApprovalRecordWhereInput[]
    NOT?: ApprovalRecordWhereInput | ApprovalRecordWhereInput[]
    id?: StringFilter<"ApprovalRecord"> | string
    ticketId?: StringFilter<"ApprovalRecord"> | string
    approvalLevel?: IntFilter<"ApprovalRecord"> | number
    approverId?: StringFilter<"ApprovalRecord"> | string
    approverName?: StringFilter<"ApprovalRecord"> | string
    action?: StringFilter<"ApprovalRecord"> | string
    comment?: StringFilter<"ApprovalRecord"> | string
    approvedAt?: DateTimeFilter<"ApprovalRecord"> | Date | string
    createdAt?: DateTimeFilter<"ApprovalRecord"> | Date | string
    ticket?: XOR<ExceptionTicketScalarRelationFilter, ExceptionTicketWhereInput>
  }

  export type ApprovalRecordOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalLevel?: SortOrder
    approverId?: SortOrder
    approverName?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    ticket?: ExceptionTicketOrderByWithRelationInput
  }

  export type ApprovalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ApprovalRecordWhereInput | ApprovalRecordWhereInput[]
    OR?: ApprovalRecordWhereInput[]
    NOT?: ApprovalRecordWhereInput | ApprovalRecordWhereInput[]
    ticketId?: StringFilter<"ApprovalRecord"> | string
    approvalLevel?: IntFilter<"ApprovalRecord"> | number
    approverId?: StringFilter<"ApprovalRecord"> | string
    approverName?: StringFilter<"ApprovalRecord"> | string
    action?: StringFilter<"ApprovalRecord"> | string
    comment?: StringFilter<"ApprovalRecord"> | string
    approvedAt?: DateTimeFilter<"ApprovalRecord"> | Date | string
    createdAt?: DateTimeFilter<"ApprovalRecord"> | Date | string
    ticket?: XOR<ExceptionTicketScalarRelationFilter, ExceptionTicketWhereInput>
  }, "id">

  export type ApprovalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalLevel?: SortOrder
    approverId?: SortOrder
    approverName?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ApprovalRecordCountOrderByAggregateInput
    _avg?: ApprovalRecordAvgOrderByAggregateInput
    _max?: ApprovalRecordMaxOrderByAggregateInput
    _min?: ApprovalRecordMinOrderByAggregateInput
    _sum?: ApprovalRecordSumOrderByAggregateInput
  }

  export type ApprovalRecordScalarWhereWithAggregatesInput = {
    AND?: ApprovalRecordScalarWhereWithAggregatesInput | ApprovalRecordScalarWhereWithAggregatesInput[]
    OR?: ApprovalRecordScalarWhereWithAggregatesInput[]
    NOT?: ApprovalRecordScalarWhereWithAggregatesInput | ApprovalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApprovalRecord"> | string
    ticketId?: StringWithAggregatesFilter<"ApprovalRecord"> | string
    approvalLevel?: IntWithAggregatesFilter<"ApprovalRecord"> | number
    approverId?: StringWithAggregatesFilter<"ApprovalRecord"> | string
    approverName?: StringWithAggregatesFilter<"ApprovalRecord"> | string
    action?: StringWithAggregatesFilter<"ApprovalRecord"> | string
    comment?: StringWithAggregatesFilter<"ApprovalRecord"> | string
    approvedAt?: DateTimeWithAggregatesFilter<"ApprovalRecord"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ApprovalRecord"> | Date | string
  }

  export type CompensationRecordWhereInput = {
    AND?: CompensationRecordWhereInput | CompensationRecordWhereInput[]
    OR?: CompensationRecordWhereInput[]
    NOT?: CompensationRecordWhereInput | CompensationRecordWhereInput[]
    id?: StringFilter<"CompensationRecord"> | string
    ticketId?: StringFilter<"CompensationRecord"> | string
    approvalRecordId?: StringFilter<"CompensationRecord"> | string
    amount?: FloatFilter<"CompensationRecord"> | number
    direction?: StringFilter<"CompensationRecord"> | string
    status?: StringFilter<"CompensationRecord"> | string
    reason?: StringFilter<"CompensationRecord"> | string
    paymentMethod?: StringNullableFilter<"CompensationRecord"> | string | null
    paidAt?: DateTimeNullableFilter<"CompensationRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"CompensationRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CompensationRecord"> | Date | string
    ticket?: XOR<ExceptionTicketScalarRelationFilter, ExceptionTicketWhereInput>
  }

  export type CompensationRecordOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: ExceptionTicketOrderByWithRelationInput
  }

  export type CompensationRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompensationRecordWhereInput | CompensationRecordWhereInput[]
    OR?: CompensationRecordWhereInput[]
    NOT?: CompensationRecordWhereInput | CompensationRecordWhereInput[]
    ticketId?: StringFilter<"CompensationRecord"> | string
    approvalRecordId?: StringFilter<"CompensationRecord"> | string
    amount?: FloatFilter<"CompensationRecord"> | number
    direction?: StringFilter<"CompensationRecord"> | string
    status?: StringFilter<"CompensationRecord"> | string
    reason?: StringFilter<"CompensationRecord"> | string
    paymentMethod?: StringNullableFilter<"CompensationRecord"> | string | null
    paidAt?: DateTimeNullableFilter<"CompensationRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"CompensationRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CompensationRecord"> | Date | string
    ticket?: XOR<ExceptionTicketScalarRelationFilter, ExceptionTicketWhereInput>
  }, "id">

  export type CompensationRecordOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompensationRecordCountOrderByAggregateInput
    _avg?: CompensationRecordAvgOrderByAggregateInput
    _max?: CompensationRecordMaxOrderByAggregateInput
    _min?: CompensationRecordMinOrderByAggregateInput
    _sum?: CompensationRecordSumOrderByAggregateInput
  }

  export type CompensationRecordScalarWhereWithAggregatesInput = {
    AND?: CompensationRecordScalarWhereWithAggregatesInput | CompensationRecordScalarWhereWithAggregatesInput[]
    OR?: CompensationRecordScalarWhereWithAggregatesInput[]
    NOT?: CompensationRecordScalarWhereWithAggregatesInput | CompensationRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompensationRecord"> | string
    ticketId?: StringWithAggregatesFilter<"CompensationRecord"> | string
    approvalRecordId?: StringWithAggregatesFilter<"CompensationRecord"> | string
    amount?: FloatWithAggregatesFilter<"CompensationRecord"> | number
    direction?: StringWithAggregatesFilter<"CompensationRecord"> | string
    status?: StringWithAggregatesFilter<"CompensationRecord"> | string
    reason?: StringWithAggregatesFilter<"CompensationRecord"> | string
    paymentMethod?: StringNullableWithAggregatesFilter<"CompensationRecord"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"CompensationRecord"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompensationRecord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CompensationRecord"> | Date | string
  }

  export type InventoryRecordWhereInput = {
    AND?: InventoryRecordWhereInput | InventoryRecordWhereInput[]
    OR?: InventoryRecordWhereInput[]
    NOT?: InventoryRecordWhereInput | InventoryRecordWhereInput[]
    id?: StringFilter<"InventoryRecord"> | string
    skuCode?: StringFilter<"InventoryRecord"> | string
    warehouseId?: StringFilter<"InventoryRecord"> | string
    quantityChange?: IntFilter<"InventoryRecord"> | number
    changeType?: StringFilter<"InventoryRecord"> | string
    ticketId?: StringNullableFilter<"InventoryRecord"> | string | null
    approvalRecordId?: StringNullableFilter<"InventoryRecord"> | string | null
    operator?: StringFilter<"InventoryRecord"> | string
    remark?: StringFilter<"InventoryRecord"> | string
    createdAt?: DateTimeFilter<"InventoryRecord"> | Date | string
  }

  export type InventoryRecordOrderByWithRelationInput = {
    id?: SortOrder
    skuCode?: SortOrder
    warehouseId?: SortOrder
    quantityChange?: SortOrder
    changeType?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    approvalRecordId?: SortOrderInput | SortOrder
    operator?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryRecordWhereInput | InventoryRecordWhereInput[]
    OR?: InventoryRecordWhereInput[]
    NOT?: InventoryRecordWhereInput | InventoryRecordWhereInput[]
    skuCode?: StringFilter<"InventoryRecord"> | string
    warehouseId?: StringFilter<"InventoryRecord"> | string
    quantityChange?: IntFilter<"InventoryRecord"> | number
    changeType?: StringFilter<"InventoryRecord"> | string
    ticketId?: StringNullableFilter<"InventoryRecord"> | string | null
    approvalRecordId?: StringNullableFilter<"InventoryRecord"> | string | null
    operator?: StringFilter<"InventoryRecord"> | string
    remark?: StringFilter<"InventoryRecord"> | string
    createdAt?: DateTimeFilter<"InventoryRecord"> | Date | string
  }, "id">

  export type InventoryRecordOrderByWithAggregationInput = {
    id?: SortOrder
    skuCode?: SortOrder
    warehouseId?: SortOrder
    quantityChange?: SortOrder
    changeType?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    approvalRecordId?: SortOrderInput | SortOrder
    operator?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryRecordCountOrderByAggregateInput
    _avg?: InventoryRecordAvgOrderByAggregateInput
    _max?: InventoryRecordMaxOrderByAggregateInput
    _min?: InventoryRecordMinOrderByAggregateInput
    _sum?: InventoryRecordSumOrderByAggregateInput
  }

  export type InventoryRecordScalarWhereWithAggregatesInput = {
    AND?: InventoryRecordScalarWhereWithAggregatesInput | InventoryRecordScalarWhereWithAggregatesInput[]
    OR?: InventoryRecordScalarWhereWithAggregatesInput[]
    NOT?: InventoryRecordScalarWhereWithAggregatesInput | InventoryRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InventoryRecord"> | string
    skuCode?: StringWithAggregatesFilter<"InventoryRecord"> | string
    warehouseId?: StringWithAggregatesFilter<"InventoryRecord"> | string
    quantityChange?: IntWithAggregatesFilter<"InventoryRecord"> | number
    changeType?: StringWithAggregatesFilter<"InventoryRecord"> | string
    ticketId?: StringNullableWithAggregatesFilter<"InventoryRecord"> | string | null
    approvalRecordId?: StringNullableWithAggregatesFilter<"InventoryRecord"> | string | null
    operator?: StringWithAggregatesFilter<"InventoryRecord"> | string
    remark?: StringWithAggregatesFilter<"InventoryRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InventoryRecord"> | Date | string
  }

  export type QCRuleWhereInput = {
    AND?: QCRuleWhereInput | QCRuleWhereInput[]
    OR?: QCRuleWhereInput[]
    NOT?: QCRuleWhereInput | QCRuleWhereInput[]
    id?: StringFilter<"QCRule"> | string
    name?: StringFilter<"QCRule"> | string
    code?: StringFilter<"QCRule"> | string
    description?: StringFilter<"QCRule"> | string
    exceptionType?: StringFilter<"QCRule"> | string
    triggerCondition?: JsonFilter<"QCRule">
    severity?: StringFilter<"QCRule"> | string
    autoCreateTicket?: BoolFilter<"QCRule"> | boolean
    autoApprovalLevel?: IntFilter<"QCRule"> | number
    isActive?: BoolFilter<"QCRule"> | boolean
    createdAt?: DateTimeFilter<"QCRule"> | Date | string
    updatedAt?: DateTimeFilter<"QCRule"> | Date | string
  }

  export type QCRuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    exceptionType?: SortOrder
    triggerCondition?: SortOrder
    severity?: SortOrder
    autoCreateTicket?: SortOrder
    autoApprovalLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QCRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: QCRuleWhereInput | QCRuleWhereInput[]
    OR?: QCRuleWhereInput[]
    NOT?: QCRuleWhereInput | QCRuleWhereInput[]
    name?: StringFilter<"QCRule"> | string
    description?: StringFilter<"QCRule"> | string
    exceptionType?: StringFilter<"QCRule"> | string
    triggerCondition?: JsonFilter<"QCRule">
    severity?: StringFilter<"QCRule"> | string
    autoCreateTicket?: BoolFilter<"QCRule"> | boolean
    autoApprovalLevel?: IntFilter<"QCRule"> | number
    isActive?: BoolFilter<"QCRule"> | boolean
    createdAt?: DateTimeFilter<"QCRule"> | Date | string
    updatedAt?: DateTimeFilter<"QCRule"> | Date | string
  }, "id" | "code">

  export type QCRuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    exceptionType?: SortOrder
    triggerCondition?: SortOrder
    severity?: SortOrder
    autoCreateTicket?: SortOrder
    autoApprovalLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QCRuleCountOrderByAggregateInput
    _avg?: QCRuleAvgOrderByAggregateInput
    _max?: QCRuleMaxOrderByAggregateInput
    _min?: QCRuleMinOrderByAggregateInput
    _sum?: QCRuleSumOrderByAggregateInput
  }

  export type QCRuleScalarWhereWithAggregatesInput = {
    AND?: QCRuleScalarWhereWithAggregatesInput | QCRuleScalarWhereWithAggregatesInput[]
    OR?: QCRuleScalarWhereWithAggregatesInput[]
    NOT?: QCRuleScalarWhereWithAggregatesInput | QCRuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QCRule"> | string
    name?: StringWithAggregatesFilter<"QCRule"> | string
    code?: StringWithAggregatesFilter<"QCRule"> | string
    description?: StringWithAggregatesFilter<"QCRule"> | string
    exceptionType?: StringWithAggregatesFilter<"QCRule"> | string
    triggerCondition?: JsonWithAggregatesFilter<"QCRule">
    severity?: StringWithAggregatesFilter<"QCRule"> | string
    autoCreateTicket?: BoolWithAggregatesFilter<"QCRule"> | boolean
    autoApprovalLevel?: IntWithAggregatesFilter<"QCRule"> | number
    isActive?: BoolWithAggregatesFilter<"QCRule"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QCRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QCRule"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    configKey?: StringFilter<"SystemConfig"> | string
    configValue?: StringFilter<"SystemConfig"> | string
    configType?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    category?: StringFilter<"SystemConfig"> | string
    isActive?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    configKey?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    configValue?: StringFilter<"SystemConfig"> | string
    configType?: StringFilter<"SystemConfig"> | string
    description?: StringNullableFilter<"SystemConfig"> | string | null
    category?: StringFilter<"SystemConfig"> | string
    isActive?: BoolFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeFilter<"SystemConfig"> | Date | string
  }, "id" | "configKey">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    configKey?: StringWithAggregatesFilter<"SystemConfig"> | string
    configValue?: StringWithAggregatesFilter<"SystemConfig"> | string
    configType?: StringWithAggregatesFilter<"SystemConfig"> | string
    description?: StringNullableWithAggregatesFilter<"SystemConfig"> | string | null
    category?: StringWithAggregatesFilter<"SystemConfig"> | string
    isActive?: BoolWithAggregatesFilter<"SystemConfig"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
  }

  export type OrderSnapshotCreateInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exceptionTickets?: ExceptionTicketCreateNestedManyWithoutOrderSnapshotInput
    scanRecords?: ScanRecordCreateNestedManyWithoutOrderSnapshotInput
  }

  export type OrderSnapshotUncheckedCreateInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exceptionTickets?: ExceptionTicketUncheckedCreateNestedManyWithoutOrderSnapshotInput
    scanRecords?: ScanRecordUncheckedCreateNestedManyWithoutOrderSnapshotInput
  }

  export type OrderSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exceptionTickets?: ExceptionTicketUpdateManyWithoutOrderSnapshotNestedInput
    scanRecords?: ScanRecordUpdateManyWithoutOrderSnapshotNestedInput
  }

  export type OrderSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exceptionTickets?: ExceptionTicketUncheckedUpdateManyWithoutOrderSnapshotNestedInput
    scanRecords?: ScanRecordUncheckedUpdateManyWithoutOrderSnapshotNestedInput
  }

  export type OrderSnapshotCreateManyInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateInput = {
    id?: string
    apiName: string
    requestParams: JsonNullValueInput | InputJsonValue
    responseStatus: number
    responseBody?: string | null
    status: string
    errorMessage?: string | null
    duration: number
    createdAt?: Date | string
  }

  export type SyncLogUncheckedCreateInput = {
    id?: string
    apiName: string
    requestParams: JsonNullValueInput | InputJsonValue
    responseStatus: number
    responseBody?: string | null
    status: string
    errorMessage?: string | null
    duration: number
    createdAt?: Date | string
  }

  export type SyncLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiName?: StringFieldUpdateOperationsInput | string
    requestParams?: JsonNullValueInput | InputJsonValue
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiName?: StringFieldUpdateOperationsInput | string
    requestParams?: JsonNullValueInput | InputJsonValue
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogCreateManyInput = {
    id?: string
    apiName: string
    requestParams: JsonNullValueInput | InputJsonValue
    responseStatus: number
    responseBody?: string | null
    status: string
    errorMessage?: string | null
    duration: number
    createdAt?: Date | string
  }

  export type SyncLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiName?: StringFieldUpdateOperationsInput | string
    requestParams?: JsonNullValueInput | InputJsonValue
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SyncLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    apiName?: StringFieldUpdateOperationsInput | string
    requestParams?: JsonNullValueInput | InputJsonValue
    responseStatus?: IntFieldUpdateOperationsInput | number
    responseBody?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    errorMessage?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordCreateInput = {
    id?: string
    scanId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    createdAt?: Date | string
    orderSnapshot: OrderSnapshotCreateNestedOneWithoutScanRecordsInput
    ticket?: ExceptionTicketCreateNestedOneWithoutScanRecordsInput
  }

  export type ScanRecordUncheckedCreateInput = {
    id?: string
    scanId: string
    orderSnapshotId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    ticketId?: string | null
    createdAt?: Date | string
  }

  export type ScanRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSnapshot?: OrderSnapshotUpdateOneRequiredWithoutScanRecordsNestedInput
    ticket?: ExceptionTicketUpdateOneWithoutScanRecordsNestedInput
  }

  export type ScanRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordCreateManyInput = {
    id?: string
    scanId: string
    orderSnapshotId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    ticketId?: string | null
    createdAt?: Date | string
  }

  export type ScanRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExceptionTicketCreateInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSnapshot: OrderSnapshotCreateNestedOneWithoutExceptionTicketsInput
    scanRecords?: ScanRecordCreateNestedManyWithoutTicketInput
    approvalRecords?: ApprovalRecordCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketUncheckedCreateInput = {
    id?: string
    ticketNo: string
    orderSnapshotId: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordUncheckedCreateNestedManyWithoutTicketInput
    approvalRecords?: ApprovalRecordUncheckedCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSnapshot?: OrderSnapshotUpdateOneRequiredWithoutExceptionTicketsNestedInput
    scanRecords?: ScanRecordUpdateManyWithoutTicketNestedInput
    approvalRecords?: ApprovalRecordUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUncheckedUpdateManyWithoutTicketNestedInput
    approvalRecords?: ApprovalRecordUncheckedUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketCreateManyInput = {
    id?: string
    ticketNo: string
    orderSnapshotId: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExceptionTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExceptionTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRecordCreateInput = {
    id?: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date | string
    createdAt?: Date | string
    ticket: ExceptionTicketCreateNestedOneWithoutApprovalRecordsInput
  }

  export type ApprovalRecordUncheckedCreateInput = {
    id?: string
    ticketId: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date | string
    createdAt?: Date | string
  }

  export type ApprovalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: ExceptionTicketUpdateOneRequiredWithoutApprovalRecordsNestedInput
  }

  export type ApprovalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRecordCreateManyInput = {
    id?: string
    ticketId: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date | string
    createdAt?: Date | string
  }

  export type ApprovalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationRecordCreateInput = {
    id?: string
    approvalRecordId: string
    amount: number
    direction: string
    status?: string
    reason: string
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: ExceptionTicketCreateNestedOneWithoutCompensationRecordsInput
  }

  export type CompensationRecordUncheckedCreateInput = {
    id?: string
    ticketId: string
    approvalRecordId: string
    amount: number
    direction: string
    status?: string
    reason: string
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: ExceptionTicketUpdateOneRequiredWithoutCompensationRecordsNestedInput
  }

  export type CompensationRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationRecordCreateManyInput = {
    id?: string
    ticketId: string
    approvalRecordId: string
    amount: number
    direction: string
    status?: string
    reason: string
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryRecordCreateInput = {
    id?: string
    skuCode: string
    warehouseId?: string
    quantityChange: number
    changeType: string
    ticketId?: string | null
    approvalRecordId?: string | null
    operator: string
    remark: string
    createdAt?: Date | string
  }

  export type InventoryRecordUncheckedCreateInput = {
    id?: string
    skuCode: string
    warehouseId?: string
    quantityChange: number
    changeType: string
    ticketId?: string | null
    approvalRecordId?: string | null
    operator: string
    remark: string
    createdAt?: Date | string
  }

  export type InventoryRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    approvalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    approvalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryRecordCreateManyInput = {
    id?: string
    skuCode: string
    warehouseId?: string
    quantityChange: number
    changeType: string
    ticketId?: string | null
    approvalRecordId?: string | null
    operator: string
    remark: string
    createdAt?: Date | string
  }

  export type InventoryRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    approvalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantityChange?: IntFieldUpdateOperationsInput | number
    changeType?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    approvalRecordId?: NullableStringFieldUpdateOperationsInput | string | null
    operator?: StringFieldUpdateOperationsInput | string
    remark?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QCRuleCreateInput = {
    id?: string
    name: string
    code: string
    description: string
    exceptionType: string
    triggerCondition: JsonNullValueInput | InputJsonValue
    severity: string
    autoCreateTicket?: boolean
    autoApprovalLevel?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QCRuleUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    description: string
    exceptionType: string
    triggerCondition: JsonNullValueInput | InputJsonValue
    severity: string
    autoCreateTicket?: boolean
    autoApprovalLevel?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QCRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    triggerCondition?: JsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    autoCreateTicket?: BoolFieldUpdateOperationsInput | boolean
    autoApprovalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QCRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    triggerCondition?: JsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    autoCreateTicket?: BoolFieldUpdateOperationsInput | boolean
    autoApprovalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QCRuleCreateManyInput = {
    id?: string
    name: string
    code: string
    description: string
    exceptionType: string
    triggerCondition: JsonNullValueInput | InputJsonValue
    severity: string
    autoCreateTicket?: boolean
    autoApprovalLevel?: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QCRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    triggerCondition?: JsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    autoCreateTicket?: BoolFieldUpdateOperationsInput | boolean
    autoApprovalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QCRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    triggerCondition?: JsonNullValueInput | InputJsonValue
    severity?: StringFieldUpdateOperationsInput | string
    autoCreateTicket?: BoolFieldUpdateOperationsInput | boolean
    autoApprovalLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    id?: string
    configKey: string
    configValue: string
    configType: string
    description?: string | null
    category: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    configKey: string
    configValue: string
    configType: string
    description?: string | null
    category: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    configKey: string
    configValue: string
    configType: string
    description?: string | null
    category: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    configKey?: StringFieldUpdateOperationsInput | string
    configValue?: StringFieldUpdateOperationsInput | string
    configType?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ExceptionTicketListRelationFilter = {
    every?: ExceptionTicketWhereInput
    some?: ExceptionTicketWhereInput
    none?: ExceptionTicketWhereInput
  }

  export type ScanRecordListRelationFilter = {
    every?: ScanRecordWhereInput
    some?: ScanRecordWhereInput
    none?: ScanRecordWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExceptionTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScanRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    v2OrderId?: SortOrder
    externalCode?: SortOrder
    storeName?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    amount?: SortOrder
    itemsJson?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSnapshotAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type OrderSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    v2OrderId?: SortOrder
    externalCode?: SortOrder
    storeName?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    amount?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    v2OrderId?: SortOrder
    externalCode?: SortOrder
    storeName?: SortOrder
    receiverName?: SortOrder
    receiverPhone?: SortOrder
    receiverAddress?: SortOrder
    amount?: SortOrder
    syncedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSnapshotSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SyncLogCountOrderByAggregateInput = {
    id?: SortOrder
    apiName?: SortOrder
    requestParams?: SortOrder
    responseStatus?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogAvgOrderByAggregateInput = {
    responseStatus?: SortOrder
    duration?: SortOrder
  }

  export type SyncLogMaxOrderByAggregateInput = {
    id?: SortOrder
    apiName?: SortOrder
    responseStatus?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogMinOrderByAggregateInput = {
    id?: SortOrder
    apiName?: SortOrder
    responseStatus?: SortOrder
    responseBody?: SortOrder
    status?: SortOrder
    errorMessage?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type SyncLogSumOrderByAggregateInput = {
    responseStatus?: SortOrder
    duration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type OrderSnapshotScalarRelationFilter = {
    is?: OrderSnapshotWhereInput
    isNot?: OrderSnapshotWhereInput
  }

  export type ExceptionTicketNullableScalarRelationFilter = {
    is?: ExceptionTicketWhereInput | null
    isNot?: ExceptionTicketWhereInput | null
  }

  export type ScanRecordCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    orderSnapshotId?: SortOrder
    skuCode?: SortOrder
    skuName?: SortOrder
    scannedQuantity?: SortOrder
    scanTime?: SortOrder
    operator?: SortOrder
    deviceId?: SortOrder
    qcResult?: SortOrder
    qcRuleId?: SortOrder
    qcRuleName?: SortOrder
    qcDescription?: SortOrder
    batchStatus?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScanRecordAvgOrderByAggregateInput = {
    scannedQuantity?: SortOrder
  }

  export type ScanRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    orderSnapshotId?: SortOrder
    skuCode?: SortOrder
    skuName?: SortOrder
    scannedQuantity?: SortOrder
    scanTime?: SortOrder
    operator?: SortOrder
    deviceId?: SortOrder
    qcResult?: SortOrder
    qcRuleId?: SortOrder
    qcRuleName?: SortOrder
    qcDescription?: SortOrder
    batchStatus?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScanRecordMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    orderSnapshotId?: SortOrder
    skuCode?: SortOrder
    skuName?: SortOrder
    scannedQuantity?: SortOrder
    scanTime?: SortOrder
    operator?: SortOrder
    deviceId?: SortOrder
    qcResult?: SortOrder
    qcRuleId?: SortOrder
    qcRuleName?: SortOrder
    qcDescription?: SortOrder
    batchStatus?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
  }

  export type ScanRecordSumOrderByAggregateInput = {
    scannedQuantity?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApprovalRecordListRelationFilter = {
    every?: ApprovalRecordWhereInput
    some?: ApprovalRecordWhereInput
    none?: ApprovalRecordWhereInput
  }

  export type CompensationRecordListRelationFilter = {
    every?: CompensationRecordWhereInput
    some?: CompensationRecordWhereInput
    none?: CompensationRecordWhereInput
  }

  export type ApprovalRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompensationRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExceptionTicketCountOrderByAggregateInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    orderSnapshotId?: SortOrder
    exceptionType?: SortOrder
    source?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExceptionTicketAvgOrderByAggregateInput = {
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
  }

  export type ExceptionTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    orderSnapshotId?: SortOrder
    exceptionType?: SortOrder
    source?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExceptionTicketMinOrderByAggregateInput = {
    id?: SortOrder
    ticketNo?: SortOrder
    orderSnapshotId?: SortOrder
    exceptionType?: SortOrder
    source?: SortOrder
    category?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
    submittedBy?: SortOrder
    submittedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExceptionTicketSumOrderByAggregateInput = {
    currentApprovalLevel?: SortOrder
    resubmitCount?: SortOrder
    maxResubmitCount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ExceptionTicketScalarRelationFilter = {
    is?: ExceptionTicketWhereInput
    isNot?: ExceptionTicketWhereInput
  }

  export type ApprovalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalLevel?: SortOrder
    approverId?: SortOrder
    approverName?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalRecordAvgOrderByAggregateInput = {
    approvalLevel?: SortOrder
  }

  export type ApprovalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalLevel?: SortOrder
    approverId?: SortOrder
    approverName?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalLevel?: SortOrder
    approverId?: SortOrder
    approverName?: SortOrder
    action?: SortOrder
    comment?: SortOrder
    approvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ApprovalRecordSumOrderByAggregateInput = {
    approvalLevel?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CompensationRecordCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompensationRecordAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CompensationRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompensationRecordMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    amount?: SortOrder
    direction?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    paymentMethod?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompensationRecordSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type InventoryRecordCountOrderByAggregateInput = {
    id?: SortOrder
    skuCode?: SortOrder
    warehouseId?: SortOrder
    quantityChange?: SortOrder
    changeType?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    operator?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryRecordAvgOrderByAggregateInput = {
    quantityChange?: SortOrder
  }

  export type InventoryRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    skuCode?: SortOrder
    warehouseId?: SortOrder
    quantityChange?: SortOrder
    changeType?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    operator?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryRecordMinOrderByAggregateInput = {
    id?: SortOrder
    skuCode?: SortOrder
    warehouseId?: SortOrder
    quantityChange?: SortOrder
    changeType?: SortOrder
    ticketId?: SortOrder
    approvalRecordId?: SortOrder
    operator?: SortOrder
    remark?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryRecordSumOrderByAggregateInput = {
    quantityChange?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type QCRuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    exceptionType?: SortOrder
    triggerCondition?: SortOrder
    severity?: SortOrder
    autoCreateTicket?: SortOrder
    autoApprovalLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QCRuleAvgOrderByAggregateInput = {
    autoApprovalLevel?: SortOrder
  }

  export type QCRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    exceptionType?: SortOrder
    severity?: SortOrder
    autoCreateTicket?: SortOrder
    autoApprovalLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QCRuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    exceptionType?: SortOrder
    severity?: SortOrder
    autoCreateTicket?: SortOrder
    autoApprovalLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QCRuleSumOrderByAggregateInput = {
    autoApprovalLevel?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    configKey?: SortOrder
    configValue?: SortOrder
    configType?: SortOrder
    description?: SortOrder
    category?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExceptionTicketCreateNestedManyWithoutOrderSnapshotInput = {
    create?: XOR<ExceptionTicketCreateWithoutOrderSnapshotInput, ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput> | ExceptionTicketCreateWithoutOrderSnapshotInput[] | ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput | ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput[]
    createMany?: ExceptionTicketCreateManyOrderSnapshotInputEnvelope
    connect?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
  }

  export type ScanRecordCreateNestedManyWithoutOrderSnapshotInput = {
    create?: XOR<ScanRecordCreateWithoutOrderSnapshotInput, ScanRecordUncheckedCreateWithoutOrderSnapshotInput> | ScanRecordCreateWithoutOrderSnapshotInput[] | ScanRecordUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutOrderSnapshotInput | ScanRecordCreateOrConnectWithoutOrderSnapshotInput[]
    createMany?: ScanRecordCreateManyOrderSnapshotInputEnvelope
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
  }

  export type ExceptionTicketUncheckedCreateNestedManyWithoutOrderSnapshotInput = {
    create?: XOR<ExceptionTicketCreateWithoutOrderSnapshotInput, ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput> | ExceptionTicketCreateWithoutOrderSnapshotInput[] | ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput | ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput[]
    createMany?: ExceptionTicketCreateManyOrderSnapshotInputEnvelope
    connect?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
  }

  export type ScanRecordUncheckedCreateNestedManyWithoutOrderSnapshotInput = {
    create?: XOR<ScanRecordCreateWithoutOrderSnapshotInput, ScanRecordUncheckedCreateWithoutOrderSnapshotInput> | ScanRecordCreateWithoutOrderSnapshotInput[] | ScanRecordUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutOrderSnapshotInput | ScanRecordCreateOrConnectWithoutOrderSnapshotInput[]
    createMany?: ScanRecordCreateManyOrderSnapshotInputEnvelope
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ExceptionTicketUpdateManyWithoutOrderSnapshotNestedInput = {
    create?: XOR<ExceptionTicketCreateWithoutOrderSnapshotInput, ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput> | ExceptionTicketCreateWithoutOrderSnapshotInput[] | ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput | ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput[]
    upsert?: ExceptionTicketUpsertWithWhereUniqueWithoutOrderSnapshotInput | ExceptionTicketUpsertWithWhereUniqueWithoutOrderSnapshotInput[]
    createMany?: ExceptionTicketCreateManyOrderSnapshotInputEnvelope
    set?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    disconnect?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    delete?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    connect?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    update?: ExceptionTicketUpdateWithWhereUniqueWithoutOrderSnapshotInput | ExceptionTicketUpdateWithWhereUniqueWithoutOrderSnapshotInput[]
    updateMany?: ExceptionTicketUpdateManyWithWhereWithoutOrderSnapshotInput | ExceptionTicketUpdateManyWithWhereWithoutOrderSnapshotInput[]
    deleteMany?: ExceptionTicketScalarWhereInput | ExceptionTicketScalarWhereInput[]
  }

  export type ScanRecordUpdateManyWithoutOrderSnapshotNestedInput = {
    create?: XOR<ScanRecordCreateWithoutOrderSnapshotInput, ScanRecordUncheckedCreateWithoutOrderSnapshotInput> | ScanRecordCreateWithoutOrderSnapshotInput[] | ScanRecordUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutOrderSnapshotInput | ScanRecordCreateOrConnectWithoutOrderSnapshotInput[]
    upsert?: ScanRecordUpsertWithWhereUniqueWithoutOrderSnapshotInput | ScanRecordUpsertWithWhereUniqueWithoutOrderSnapshotInput[]
    createMany?: ScanRecordCreateManyOrderSnapshotInputEnvelope
    set?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    disconnect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    delete?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    update?: ScanRecordUpdateWithWhereUniqueWithoutOrderSnapshotInput | ScanRecordUpdateWithWhereUniqueWithoutOrderSnapshotInput[]
    updateMany?: ScanRecordUpdateManyWithWhereWithoutOrderSnapshotInput | ScanRecordUpdateManyWithWhereWithoutOrderSnapshotInput[]
    deleteMany?: ScanRecordScalarWhereInput | ScanRecordScalarWhereInput[]
  }

  export type ExceptionTicketUncheckedUpdateManyWithoutOrderSnapshotNestedInput = {
    create?: XOR<ExceptionTicketCreateWithoutOrderSnapshotInput, ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput> | ExceptionTicketCreateWithoutOrderSnapshotInput[] | ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput | ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput[]
    upsert?: ExceptionTicketUpsertWithWhereUniqueWithoutOrderSnapshotInput | ExceptionTicketUpsertWithWhereUniqueWithoutOrderSnapshotInput[]
    createMany?: ExceptionTicketCreateManyOrderSnapshotInputEnvelope
    set?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    disconnect?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    delete?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    connect?: ExceptionTicketWhereUniqueInput | ExceptionTicketWhereUniqueInput[]
    update?: ExceptionTicketUpdateWithWhereUniqueWithoutOrderSnapshotInput | ExceptionTicketUpdateWithWhereUniqueWithoutOrderSnapshotInput[]
    updateMany?: ExceptionTicketUpdateManyWithWhereWithoutOrderSnapshotInput | ExceptionTicketUpdateManyWithWhereWithoutOrderSnapshotInput[]
    deleteMany?: ExceptionTicketScalarWhereInput | ExceptionTicketScalarWhereInput[]
  }

  export type ScanRecordUncheckedUpdateManyWithoutOrderSnapshotNestedInput = {
    create?: XOR<ScanRecordCreateWithoutOrderSnapshotInput, ScanRecordUncheckedCreateWithoutOrderSnapshotInput> | ScanRecordCreateWithoutOrderSnapshotInput[] | ScanRecordUncheckedCreateWithoutOrderSnapshotInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutOrderSnapshotInput | ScanRecordCreateOrConnectWithoutOrderSnapshotInput[]
    upsert?: ScanRecordUpsertWithWhereUniqueWithoutOrderSnapshotInput | ScanRecordUpsertWithWhereUniqueWithoutOrderSnapshotInput[]
    createMany?: ScanRecordCreateManyOrderSnapshotInputEnvelope
    set?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    disconnect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    delete?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    update?: ScanRecordUpdateWithWhereUniqueWithoutOrderSnapshotInput | ScanRecordUpdateWithWhereUniqueWithoutOrderSnapshotInput[]
    updateMany?: ScanRecordUpdateManyWithWhereWithoutOrderSnapshotInput | ScanRecordUpdateManyWithWhereWithoutOrderSnapshotInput[]
    deleteMany?: ScanRecordScalarWhereInput | ScanRecordScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrderSnapshotCreateNestedOneWithoutScanRecordsInput = {
    create?: XOR<OrderSnapshotCreateWithoutScanRecordsInput, OrderSnapshotUncheckedCreateWithoutScanRecordsInput>
    connectOrCreate?: OrderSnapshotCreateOrConnectWithoutScanRecordsInput
    connect?: OrderSnapshotWhereUniqueInput
  }

  export type ExceptionTicketCreateNestedOneWithoutScanRecordsInput = {
    create?: XOR<ExceptionTicketCreateWithoutScanRecordsInput, ExceptionTicketUncheckedCreateWithoutScanRecordsInput>
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutScanRecordsInput
    connect?: ExceptionTicketWhereUniqueInput
  }

  export type OrderSnapshotUpdateOneRequiredWithoutScanRecordsNestedInput = {
    create?: XOR<OrderSnapshotCreateWithoutScanRecordsInput, OrderSnapshotUncheckedCreateWithoutScanRecordsInput>
    connectOrCreate?: OrderSnapshotCreateOrConnectWithoutScanRecordsInput
    upsert?: OrderSnapshotUpsertWithoutScanRecordsInput
    connect?: OrderSnapshotWhereUniqueInput
    update?: XOR<XOR<OrderSnapshotUpdateToOneWithWhereWithoutScanRecordsInput, OrderSnapshotUpdateWithoutScanRecordsInput>, OrderSnapshotUncheckedUpdateWithoutScanRecordsInput>
  }

  export type ExceptionTicketUpdateOneWithoutScanRecordsNestedInput = {
    create?: XOR<ExceptionTicketCreateWithoutScanRecordsInput, ExceptionTicketUncheckedCreateWithoutScanRecordsInput>
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutScanRecordsInput
    upsert?: ExceptionTicketUpsertWithoutScanRecordsInput
    disconnect?: ExceptionTicketWhereInput | boolean
    delete?: ExceptionTicketWhereInput | boolean
    connect?: ExceptionTicketWhereUniqueInput
    update?: XOR<XOR<ExceptionTicketUpdateToOneWithWhereWithoutScanRecordsInput, ExceptionTicketUpdateWithoutScanRecordsInput>, ExceptionTicketUncheckedUpdateWithoutScanRecordsInput>
  }

  export type OrderSnapshotCreateNestedOneWithoutExceptionTicketsInput = {
    create?: XOR<OrderSnapshotCreateWithoutExceptionTicketsInput, OrderSnapshotUncheckedCreateWithoutExceptionTicketsInput>
    connectOrCreate?: OrderSnapshotCreateOrConnectWithoutExceptionTicketsInput
    connect?: OrderSnapshotWhereUniqueInput
  }

  export type ScanRecordCreateNestedManyWithoutTicketInput = {
    create?: XOR<ScanRecordCreateWithoutTicketInput, ScanRecordUncheckedCreateWithoutTicketInput> | ScanRecordCreateWithoutTicketInput[] | ScanRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutTicketInput | ScanRecordCreateOrConnectWithoutTicketInput[]
    createMany?: ScanRecordCreateManyTicketInputEnvelope
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
  }

  export type ApprovalRecordCreateNestedManyWithoutTicketInput = {
    create?: XOR<ApprovalRecordCreateWithoutTicketInput, ApprovalRecordUncheckedCreateWithoutTicketInput> | ApprovalRecordCreateWithoutTicketInput[] | ApprovalRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ApprovalRecordCreateOrConnectWithoutTicketInput | ApprovalRecordCreateOrConnectWithoutTicketInput[]
    createMany?: ApprovalRecordCreateManyTicketInputEnvelope
    connect?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
  }

  export type CompensationRecordCreateNestedManyWithoutTicketInput = {
    create?: XOR<CompensationRecordCreateWithoutTicketInput, CompensationRecordUncheckedCreateWithoutTicketInput> | CompensationRecordCreateWithoutTicketInput[] | CompensationRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CompensationRecordCreateOrConnectWithoutTicketInput | CompensationRecordCreateOrConnectWithoutTicketInput[]
    createMany?: CompensationRecordCreateManyTicketInputEnvelope
    connect?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
  }

  export type ScanRecordUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<ScanRecordCreateWithoutTicketInput, ScanRecordUncheckedCreateWithoutTicketInput> | ScanRecordCreateWithoutTicketInput[] | ScanRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutTicketInput | ScanRecordCreateOrConnectWithoutTicketInput[]
    createMany?: ScanRecordCreateManyTicketInputEnvelope
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
  }

  export type ApprovalRecordUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<ApprovalRecordCreateWithoutTicketInput, ApprovalRecordUncheckedCreateWithoutTicketInput> | ApprovalRecordCreateWithoutTicketInput[] | ApprovalRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ApprovalRecordCreateOrConnectWithoutTicketInput | ApprovalRecordCreateOrConnectWithoutTicketInput[]
    createMany?: ApprovalRecordCreateManyTicketInputEnvelope
    connect?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
  }

  export type CompensationRecordUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<CompensationRecordCreateWithoutTicketInput, CompensationRecordUncheckedCreateWithoutTicketInput> | CompensationRecordCreateWithoutTicketInput[] | CompensationRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CompensationRecordCreateOrConnectWithoutTicketInput | CompensationRecordCreateOrConnectWithoutTicketInput[]
    createMany?: CompensationRecordCreateManyTicketInputEnvelope
    connect?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type OrderSnapshotUpdateOneRequiredWithoutExceptionTicketsNestedInput = {
    create?: XOR<OrderSnapshotCreateWithoutExceptionTicketsInput, OrderSnapshotUncheckedCreateWithoutExceptionTicketsInput>
    connectOrCreate?: OrderSnapshotCreateOrConnectWithoutExceptionTicketsInput
    upsert?: OrderSnapshotUpsertWithoutExceptionTicketsInput
    connect?: OrderSnapshotWhereUniqueInput
    update?: XOR<XOR<OrderSnapshotUpdateToOneWithWhereWithoutExceptionTicketsInput, OrderSnapshotUpdateWithoutExceptionTicketsInput>, OrderSnapshotUncheckedUpdateWithoutExceptionTicketsInput>
  }

  export type ScanRecordUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ScanRecordCreateWithoutTicketInput, ScanRecordUncheckedCreateWithoutTicketInput> | ScanRecordCreateWithoutTicketInput[] | ScanRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutTicketInput | ScanRecordCreateOrConnectWithoutTicketInput[]
    upsert?: ScanRecordUpsertWithWhereUniqueWithoutTicketInput | ScanRecordUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ScanRecordCreateManyTicketInputEnvelope
    set?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    disconnect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    delete?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    update?: ScanRecordUpdateWithWhereUniqueWithoutTicketInput | ScanRecordUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ScanRecordUpdateManyWithWhereWithoutTicketInput | ScanRecordUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ScanRecordScalarWhereInput | ScanRecordScalarWhereInput[]
  }

  export type ApprovalRecordUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ApprovalRecordCreateWithoutTicketInput, ApprovalRecordUncheckedCreateWithoutTicketInput> | ApprovalRecordCreateWithoutTicketInput[] | ApprovalRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ApprovalRecordCreateOrConnectWithoutTicketInput | ApprovalRecordCreateOrConnectWithoutTicketInput[]
    upsert?: ApprovalRecordUpsertWithWhereUniqueWithoutTicketInput | ApprovalRecordUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ApprovalRecordCreateManyTicketInputEnvelope
    set?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    disconnect?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    delete?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    connect?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    update?: ApprovalRecordUpdateWithWhereUniqueWithoutTicketInput | ApprovalRecordUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ApprovalRecordUpdateManyWithWhereWithoutTicketInput | ApprovalRecordUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ApprovalRecordScalarWhereInput | ApprovalRecordScalarWhereInput[]
  }

  export type CompensationRecordUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CompensationRecordCreateWithoutTicketInput, CompensationRecordUncheckedCreateWithoutTicketInput> | CompensationRecordCreateWithoutTicketInput[] | CompensationRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CompensationRecordCreateOrConnectWithoutTicketInput | CompensationRecordCreateOrConnectWithoutTicketInput[]
    upsert?: CompensationRecordUpsertWithWhereUniqueWithoutTicketInput | CompensationRecordUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CompensationRecordCreateManyTicketInputEnvelope
    set?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    disconnect?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    delete?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    connect?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    update?: CompensationRecordUpdateWithWhereUniqueWithoutTicketInput | CompensationRecordUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CompensationRecordUpdateManyWithWhereWithoutTicketInput | CompensationRecordUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CompensationRecordScalarWhereInput | CompensationRecordScalarWhereInput[]
  }

  export type ScanRecordUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ScanRecordCreateWithoutTicketInput, ScanRecordUncheckedCreateWithoutTicketInput> | ScanRecordCreateWithoutTicketInput[] | ScanRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ScanRecordCreateOrConnectWithoutTicketInput | ScanRecordCreateOrConnectWithoutTicketInput[]
    upsert?: ScanRecordUpsertWithWhereUniqueWithoutTicketInput | ScanRecordUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ScanRecordCreateManyTicketInputEnvelope
    set?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    disconnect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    delete?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    connect?: ScanRecordWhereUniqueInput | ScanRecordWhereUniqueInput[]
    update?: ScanRecordUpdateWithWhereUniqueWithoutTicketInput | ScanRecordUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ScanRecordUpdateManyWithWhereWithoutTicketInput | ScanRecordUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ScanRecordScalarWhereInput | ScanRecordScalarWhereInput[]
  }

  export type ApprovalRecordUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<ApprovalRecordCreateWithoutTicketInput, ApprovalRecordUncheckedCreateWithoutTicketInput> | ApprovalRecordCreateWithoutTicketInput[] | ApprovalRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: ApprovalRecordCreateOrConnectWithoutTicketInput | ApprovalRecordCreateOrConnectWithoutTicketInput[]
    upsert?: ApprovalRecordUpsertWithWhereUniqueWithoutTicketInput | ApprovalRecordUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: ApprovalRecordCreateManyTicketInputEnvelope
    set?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    disconnect?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    delete?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    connect?: ApprovalRecordWhereUniqueInput | ApprovalRecordWhereUniqueInput[]
    update?: ApprovalRecordUpdateWithWhereUniqueWithoutTicketInput | ApprovalRecordUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: ApprovalRecordUpdateManyWithWhereWithoutTicketInput | ApprovalRecordUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: ApprovalRecordScalarWhereInput | ApprovalRecordScalarWhereInput[]
  }

  export type CompensationRecordUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<CompensationRecordCreateWithoutTicketInput, CompensationRecordUncheckedCreateWithoutTicketInput> | CompensationRecordCreateWithoutTicketInput[] | CompensationRecordUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: CompensationRecordCreateOrConnectWithoutTicketInput | CompensationRecordCreateOrConnectWithoutTicketInput[]
    upsert?: CompensationRecordUpsertWithWhereUniqueWithoutTicketInput | CompensationRecordUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: CompensationRecordCreateManyTicketInputEnvelope
    set?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    disconnect?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    delete?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    connect?: CompensationRecordWhereUniqueInput | CompensationRecordWhereUniqueInput[]
    update?: CompensationRecordUpdateWithWhereUniqueWithoutTicketInput | CompensationRecordUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: CompensationRecordUpdateManyWithWhereWithoutTicketInput | CompensationRecordUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: CompensationRecordScalarWhereInput | CompensationRecordScalarWhereInput[]
  }

  export type ExceptionTicketCreateNestedOneWithoutApprovalRecordsInput = {
    create?: XOR<ExceptionTicketCreateWithoutApprovalRecordsInput, ExceptionTicketUncheckedCreateWithoutApprovalRecordsInput>
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutApprovalRecordsInput
    connect?: ExceptionTicketWhereUniqueInput
  }

  export type ExceptionTicketUpdateOneRequiredWithoutApprovalRecordsNestedInput = {
    create?: XOR<ExceptionTicketCreateWithoutApprovalRecordsInput, ExceptionTicketUncheckedCreateWithoutApprovalRecordsInput>
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutApprovalRecordsInput
    upsert?: ExceptionTicketUpsertWithoutApprovalRecordsInput
    connect?: ExceptionTicketWhereUniqueInput
    update?: XOR<XOR<ExceptionTicketUpdateToOneWithWhereWithoutApprovalRecordsInput, ExceptionTicketUpdateWithoutApprovalRecordsInput>, ExceptionTicketUncheckedUpdateWithoutApprovalRecordsInput>
  }

  export type ExceptionTicketCreateNestedOneWithoutCompensationRecordsInput = {
    create?: XOR<ExceptionTicketCreateWithoutCompensationRecordsInput, ExceptionTicketUncheckedCreateWithoutCompensationRecordsInput>
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutCompensationRecordsInput
    connect?: ExceptionTicketWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExceptionTicketUpdateOneRequiredWithoutCompensationRecordsNestedInput = {
    create?: XOR<ExceptionTicketCreateWithoutCompensationRecordsInput, ExceptionTicketUncheckedCreateWithoutCompensationRecordsInput>
    connectOrCreate?: ExceptionTicketCreateOrConnectWithoutCompensationRecordsInput
    upsert?: ExceptionTicketUpsertWithoutCompensationRecordsInput
    connect?: ExceptionTicketWhereUniqueInput
    update?: XOR<XOR<ExceptionTicketUpdateToOneWithWhereWithoutCompensationRecordsInput, ExceptionTicketUpdateWithoutCompensationRecordsInput>, ExceptionTicketUncheckedUpdateWithoutCompensationRecordsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ExceptionTicketCreateWithoutOrderSnapshotInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordCreateNestedManyWithoutTicketInput
    approvalRecords?: ApprovalRecordCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordUncheckedCreateNestedManyWithoutTicketInput
    approvalRecords?: ApprovalRecordUncheckedCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketCreateOrConnectWithoutOrderSnapshotInput = {
    where: ExceptionTicketWhereUniqueInput
    create: XOR<ExceptionTicketCreateWithoutOrderSnapshotInput, ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput>
  }

  export type ExceptionTicketCreateManyOrderSnapshotInputEnvelope = {
    data: ExceptionTicketCreateManyOrderSnapshotInput | ExceptionTicketCreateManyOrderSnapshotInput[]
    skipDuplicates?: boolean
  }

  export type ScanRecordCreateWithoutOrderSnapshotInput = {
    id?: string
    scanId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    createdAt?: Date | string
    ticket?: ExceptionTicketCreateNestedOneWithoutScanRecordsInput
  }

  export type ScanRecordUncheckedCreateWithoutOrderSnapshotInput = {
    id?: string
    scanId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    ticketId?: string | null
    createdAt?: Date | string
  }

  export type ScanRecordCreateOrConnectWithoutOrderSnapshotInput = {
    where: ScanRecordWhereUniqueInput
    create: XOR<ScanRecordCreateWithoutOrderSnapshotInput, ScanRecordUncheckedCreateWithoutOrderSnapshotInput>
  }

  export type ScanRecordCreateManyOrderSnapshotInputEnvelope = {
    data: ScanRecordCreateManyOrderSnapshotInput | ScanRecordCreateManyOrderSnapshotInput[]
    skipDuplicates?: boolean
  }

  export type ExceptionTicketUpsertWithWhereUniqueWithoutOrderSnapshotInput = {
    where: ExceptionTicketWhereUniqueInput
    update: XOR<ExceptionTicketUpdateWithoutOrderSnapshotInput, ExceptionTicketUncheckedUpdateWithoutOrderSnapshotInput>
    create: XOR<ExceptionTicketCreateWithoutOrderSnapshotInput, ExceptionTicketUncheckedCreateWithoutOrderSnapshotInput>
  }

  export type ExceptionTicketUpdateWithWhereUniqueWithoutOrderSnapshotInput = {
    where: ExceptionTicketWhereUniqueInput
    data: XOR<ExceptionTicketUpdateWithoutOrderSnapshotInput, ExceptionTicketUncheckedUpdateWithoutOrderSnapshotInput>
  }

  export type ExceptionTicketUpdateManyWithWhereWithoutOrderSnapshotInput = {
    where: ExceptionTicketScalarWhereInput
    data: XOR<ExceptionTicketUpdateManyMutationInput, ExceptionTicketUncheckedUpdateManyWithoutOrderSnapshotInput>
  }

  export type ExceptionTicketScalarWhereInput = {
    AND?: ExceptionTicketScalarWhereInput | ExceptionTicketScalarWhereInput[]
    OR?: ExceptionTicketScalarWhereInput[]
    NOT?: ExceptionTicketScalarWhereInput | ExceptionTicketScalarWhereInput[]
    id?: StringFilter<"ExceptionTicket"> | string
    ticketNo?: StringFilter<"ExceptionTicket"> | string
    orderSnapshotId?: StringFilter<"ExceptionTicket"> | string
    exceptionType?: StringFilter<"ExceptionTicket"> | string
    source?: StringFilter<"ExceptionTicket"> | string
    category?: StringFilter<"ExceptionTicket"> | string
    description?: StringFilter<"ExceptionTicket"> | string
    status?: StringFilter<"ExceptionTicket"> | string
    priority?: StringFilter<"ExceptionTicket"> | string
    currentApprovalLevel?: IntFilter<"ExceptionTicket"> | number
    resubmitCount?: IntFilter<"ExceptionTicket"> | number
    maxResubmitCount?: IntFilter<"ExceptionTicket"> | number
    submittedBy?: StringFilter<"ExceptionTicket"> | string
    submittedAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    completedAt?: DateTimeNullableFilter<"ExceptionTicket"> | Date | string | null
    createdAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
    updatedAt?: DateTimeFilter<"ExceptionTicket"> | Date | string
  }

  export type ScanRecordUpsertWithWhereUniqueWithoutOrderSnapshotInput = {
    where: ScanRecordWhereUniqueInput
    update: XOR<ScanRecordUpdateWithoutOrderSnapshotInput, ScanRecordUncheckedUpdateWithoutOrderSnapshotInput>
    create: XOR<ScanRecordCreateWithoutOrderSnapshotInput, ScanRecordUncheckedCreateWithoutOrderSnapshotInput>
  }

  export type ScanRecordUpdateWithWhereUniqueWithoutOrderSnapshotInput = {
    where: ScanRecordWhereUniqueInput
    data: XOR<ScanRecordUpdateWithoutOrderSnapshotInput, ScanRecordUncheckedUpdateWithoutOrderSnapshotInput>
  }

  export type ScanRecordUpdateManyWithWhereWithoutOrderSnapshotInput = {
    where: ScanRecordScalarWhereInput
    data: XOR<ScanRecordUpdateManyMutationInput, ScanRecordUncheckedUpdateManyWithoutOrderSnapshotInput>
  }

  export type ScanRecordScalarWhereInput = {
    AND?: ScanRecordScalarWhereInput | ScanRecordScalarWhereInput[]
    OR?: ScanRecordScalarWhereInput[]
    NOT?: ScanRecordScalarWhereInput | ScanRecordScalarWhereInput[]
    id?: StringFilter<"ScanRecord"> | string
    scanId?: StringFilter<"ScanRecord"> | string
    orderSnapshotId?: StringFilter<"ScanRecord"> | string
    skuCode?: StringFilter<"ScanRecord"> | string
    skuName?: StringFilter<"ScanRecord"> | string
    scannedQuantity?: IntFilter<"ScanRecord"> | number
    scanTime?: DateTimeFilter<"ScanRecord"> | Date | string
    operator?: StringFilter<"ScanRecord"> | string
    deviceId?: StringNullableFilter<"ScanRecord"> | string | null
    qcResult?: StringFilter<"ScanRecord"> | string
    qcRuleId?: StringNullableFilter<"ScanRecord"> | string | null
    qcRuleName?: StringNullableFilter<"ScanRecord"> | string | null
    qcDescription?: StringNullableFilter<"ScanRecord"> | string | null
    batchStatus?: StringFilter<"ScanRecord"> | string
    ticketId?: StringNullableFilter<"ScanRecord"> | string | null
    createdAt?: DateTimeFilter<"ScanRecord"> | Date | string
  }

  export type OrderSnapshotCreateWithoutScanRecordsInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exceptionTickets?: ExceptionTicketCreateNestedManyWithoutOrderSnapshotInput
  }

  export type OrderSnapshotUncheckedCreateWithoutScanRecordsInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    exceptionTickets?: ExceptionTicketUncheckedCreateNestedManyWithoutOrderSnapshotInput
  }

  export type OrderSnapshotCreateOrConnectWithoutScanRecordsInput = {
    where: OrderSnapshotWhereUniqueInput
    create: XOR<OrderSnapshotCreateWithoutScanRecordsInput, OrderSnapshotUncheckedCreateWithoutScanRecordsInput>
  }

  export type ExceptionTicketCreateWithoutScanRecordsInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSnapshot: OrderSnapshotCreateNestedOneWithoutExceptionTicketsInput
    approvalRecords?: ApprovalRecordCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketUncheckedCreateWithoutScanRecordsInput = {
    id?: string
    ticketNo: string
    orderSnapshotId: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvalRecords?: ApprovalRecordUncheckedCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketCreateOrConnectWithoutScanRecordsInput = {
    where: ExceptionTicketWhereUniqueInput
    create: XOR<ExceptionTicketCreateWithoutScanRecordsInput, ExceptionTicketUncheckedCreateWithoutScanRecordsInput>
  }

  export type OrderSnapshotUpsertWithoutScanRecordsInput = {
    update: XOR<OrderSnapshotUpdateWithoutScanRecordsInput, OrderSnapshotUncheckedUpdateWithoutScanRecordsInput>
    create: XOR<OrderSnapshotCreateWithoutScanRecordsInput, OrderSnapshotUncheckedCreateWithoutScanRecordsInput>
    where?: OrderSnapshotWhereInput
  }

  export type OrderSnapshotUpdateToOneWithWhereWithoutScanRecordsInput = {
    where?: OrderSnapshotWhereInput
    data: XOR<OrderSnapshotUpdateWithoutScanRecordsInput, OrderSnapshotUncheckedUpdateWithoutScanRecordsInput>
  }

  export type OrderSnapshotUpdateWithoutScanRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exceptionTickets?: ExceptionTicketUpdateManyWithoutOrderSnapshotNestedInput
  }

  export type OrderSnapshotUncheckedUpdateWithoutScanRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exceptionTickets?: ExceptionTicketUncheckedUpdateManyWithoutOrderSnapshotNestedInput
  }

  export type ExceptionTicketUpsertWithoutScanRecordsInput = {
    update: XOR<ExceptionTicketUpdateWithoutScanRecordsInput, ExceptionTicketUncheckedUpdateWithoutScanRecordsInput>
    create: XOR<ExceptionTicketCreateWithoutScanRecordsInput, ExceptionTicketUncheckedCreateWithoutScanRecordsInput>
    where?: ExceptionTicketWhereInput
  }

  export type ExceptionTicketUpdateToOneWithWhereWithoutScanRecordsInput = {
    where?: ExceptionTicketWhereInput
    data: XOR<ExceptionTicketUpdateWithoutScanRecordsInput, ExceptionTicketUncheckedUpdateWithoutScanRecordsInput>
  }

  export type ExceptionTicketUpdateWithoutScanRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSnapshot?: OrderSnapshotUpdateOneRequiredWithoutExceptionTicketsNestedInput
    approvalRecords?: ApprovalRecordUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketUncheckedUpdateWithoutScanRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvalRecords?: ApprovalRecordUncheckedUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type OrderSnapshotCreateWithoutExceptionTicketsInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordCreateNestedManyWithoutOrderSnapshotInput
  }

  export type OrderSnapshotUncheckedCreateWithoutExceptionTicketsInput = {
    id?: string
    v2OrderId: string
    externalCode?: string | null
    storeName?: string | null
    receiverName?: string | null
    receiverPhone?: string | null
    receiverAddress?: string | null
    amount?: number | null
    itemsJson: JsonNullValueInput | InputJsonValue
    syncedAt?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordUncheckedCreateNestedManyWithoutOrderSnapshotInput
  }

  export type OrderSnapshotCreateOrConnectWithoutExceptionTicketsInput = {
    where: OrderSnapshotWhereUniqueInput
    create: XOR<OrderSnapshotCreateWithoutExceptionTicketsInput, OrderSnapshotUncheckedCreateWithoutExceptionTicketsInput>
  }

  export type ScanRecordCreateWithoutTicketInput = {
    id?: string
    scanId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    createdAt?: Date | string
    orderSnapshot: OrderSnapshotCreateNestedOneWithoutScanRecordsInput
  }

  export type ScanRecordUncheckedCreateWithoutTicketInput = {
    id?: string
    scanId: string
    orderSnapshotId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    createdAt?: Date | string
  }

  export type ScanRecordCreateOrConnectWithoutTicketInput = {
    where: ScanRecordWhereUniqueInput
    create: XOR<ScanRecordCreateWithoutTicketInput, ScanRecordUncheckedCreateWithoutTicketInput>
  }

  export type ScanRecordCreateManyTicketInputEnvelope = {
    data: ScanRecordCreateManyTicketInput | ScanRecordCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type ApprovalRecordCreateWithoutTicketInput = {
    id?: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date | string
    createdAt?: Date | string
  }

  export type ApprovalRecordUncheckedCreateWithoutTicketInput = {
    id?: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date | string
    createdAt?: Date | string
  }

  export type ApprovalRecordCreateOrConnectWithoutTicketInput = {
    where: ApprovalRecordWhereUniqueInput
    create: XOR<ApprovalRecordCreateWithoutTicketInput, ApprovalRecordUncheckedCreateWithoutTicketInput>
  }

  export type ApprovalRecordCreateManyTicketInputEnvelope = {
    data: ApprovalRecordCreateManyTicketInput | ApprovalRecordCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type CompensationRecordCreateWithoutTicketInput = {
    id?: string
    approvalRecordId: string
    amount: number
    direction: string
    status?: string
    reason: string
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationRecordUncheckedCreateWithoutTicketInput = {
    id?: string
    approvalRecordId: string
    amount: number
    direction: string
    status?: string
    reason: string
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompensationRecordCreateOrConnectWithoutTicketInput = {
    where: CompensationRecordWhereUniqueInput
    create: XOR<CompensationRecordCreateWithoutTicketInput, CompensationRecordUncheckedCreateWithoutTicketInput>
  }

  export type CompensationRecordCreateManyTicketInputEnvelope = {
    data: CompensationRecordCreateManyTicketInput | CompensationRecordCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type OrderSnapshotUpsertWithoutExceptionTicketsInput = {
    update: XOR<OrderSnapshotUpdateWithoutExceptionTicketsInput, OrderSnapshotUncheckedUpdateWithoutExceptionTicketsInput>
    create: XOR<OrderSnapshotCreateWithoutExceptionTicketsInput, OrderSnapshotUncheckedCreateWithoutExceptionTicketsInput>
    where?: OrderSnapshotWhereInput
  }

  export type OrderSnapshotUpdateToOneWithWhereWithoutExceptionTicketsInput = {
    where?: OrderSnapshotWhereInput
    data: XOR<OrderSnapshotUpdateWithoutExceptionTicketsInput, OrderSnapshotUncheckedUpdateWithoutExceptionTicketsInput>
  }

  export type OrderSnapshotUpdateWithoutExceptionTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUpdateManyWithoutOrderSnapshotNestedInput
  }

  export type OrderSnapshotUncheckedUpdateWithoutExceptionTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    v2OrderId?: StringFieldUpdateOperationsInput | string
    externalCode?: NullableStringFieldUpdateOperationsInput | string | null
    storeName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverName?: NullableStringFieldUpdateOperationsInput | string | null
    receiverPhone?: NullableStringFieldUpdateOperationsInput | string | null
    receiverAddress?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableFloatFieldUpdateOperationsInput | number | null
    itemsJson?: JsonNullValueInput | InputJsonValue
    syncedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUncheckedUpdateManyWithoutOrderSnapshotNestedInput
  }

  export type ScanRecordUpsertWithWhereUniqueWithoutTicketInput = {
    where: ScanRecordWhereUniqueInput
    update: XOR<ScanRecordUpdateWithoutTicketInput, ScanRecordUncheckedUpdateWithoutTicketInput>
    create: XOR<ScanRecordCreateWithoutTicketInput, ScanRecordUncheckedCreateWithoutTicketInput>
  }

  export type ScanRecordUpdateWithWhereUniqueWithoutTicketInput = {
    where: ScanRecordWhereUniqueInput
    data: XOR<ScanRecordUpdateWithoutTicketInput, ScanRecordUncheckedUpdateWithoutTicketInput>
  }

  export type ScanRecordUpdateManyWithWhereWithoutTicketInput = {
    where: ScanRecordScalarWhereInput
    data: XOR<ScanRecordUpdateManyMutationInput, ScanRecordUncheckedUpdateManyWithoutTicketInput>
  }

  export type ApprovalRecordUpsertWithWhereUniqueWithoutTicketInput = {
    where: ApprovalRecordWhereUniqueInput
    update: XOR<ApprovalRecordUpdateWithoutTicketInput, ApprovalRecordUncheckedUpdateWithoutTicketInput>
    create: XOR<ApprovalRecordCreateWithoutTicketInput, ApprovalRecordUncheckedCreateWithoutTicketInput>
  }

  export type ApprovalRecordUpdateWithWhereUniqueWithoutTicketInput = {
    where: ApprovalRecordWhereUniqueInput
    data: XOR<ApprovalRecordUpdateWithoutTicketInput, ApprovalRecordUncheckedUpdateWithoutTicketInput>
  }

  export type ApprovalRecordUpdateManyWithWhereWithoutTicketInput = {
    where: ApprovalRecordScalarWhereInput
    data: XOR<ApprovalRecordUpdateManyMutationInput, ApprovalRecordUncheckedUpdateManyWithoutTicketInput>
  }

  export type ApprovalRecordScalarWhereInput = {
    AND?: ApprovalRecordScalarWhereInput | ApprovalRecordScalarWhereInput[]
    OR?: ApprovalRecordScalarWhereInput[]
    NOT?: ApprovalRecordScalarWhereInput | ApprovalRecordScalarWhereInput[]
    id?: StringFilter<"ApprovalRecord"> | string
    ticketId?: StringFilter<"ApprovalRecord"> | string
    approvalLevel?: IntFilter<"ApprovalRecord"> | number
    approverId?: StringFilter<"ApprovalRecord"> | string
    approverName?: StringFilter<"ApprovalRecord"> | string
    action?: StringFilter<"ApprovalRecord"> | string
    comment?: StringFilter<"ApprovalRecord"> | string
    approvedAt?: DateTimeFilter<"ApprovalRecord"> | Date | string
    createdAt?: DateTimeFilter<"ApprovalRecord"> | Date | string
  }

  export type CompensationRecordUpsertWithWhereUniqueWithoutTicketInput = {
    where: CompensationRecordWhereUniqueInput
    update: XOR<CompensationRecordUpdateWithoutTicketInput, CompensationRecordUncheckedUpdateWithoutTicketInput>
    create: XOR<CompensationRecordCreateWithoutTicketInput, CompensationRecordUncheckedCreateWithoutTicketInput>
  }

  export type CompensationRecordUpdateWithWhereUniqueWithoutTicketInput = {
    where: CompensationRecordWhereUniqueInput
    data: XOR<CompensationRecordUpdateWithoutTicketInput, CompensationRecordUncheckedUpdateWithoutTicketInput>
  }

  export type CompensationRecordUpdateManyWithWhereWithoutTicketInput = {
    where: CompensationRecordScalarWhereInput
    data: XOR<CompensationRecordUpdateManyMutationInput, CompensationRecordUncheckedUpdateManyWithoutTicketInput>
  }

  export type CompensationRecordScalarWhereInput = {
    AND?: CompensationRecordScalarWhereInput | CompensationRecordScalarWhereInput[]
    OR?: CompensationRecordScalarWhereInput[]
    NOT?: CompensationRecordScalarWhereInput | CompensationRecordScalarWhereInput[]
    id?: StringFilter<"CompensationRecord"> | string
    ticketId?: StringFilter<"CompensationRecord"> | string
    approvalRecordId?: StringFilter<"CompensationRecord"> | string
    amount?: FloatFilter<"CompensationRecord"> | number
    direction?: StringFilter<"CompensationRecord"> | string
    status?: StringFilter<"CompensationRecord"> | string
    reason?: StringFilter<"CompensationRecord"> | string
    paymentMethod?: StringNullableFilter<"CompensationRecord"> | string | null
    paidAt?: DateTimeNullableFilter<"CompensationRecord"> | Date | string | null
    createdAt?: DateTimeFilter<"CompensationRecord"> | Date | string
    updatedAt?: DateTimeFilter<"CompensationRecord"> | Date | string
  }

  export type ExceptionTicketCreateWithoutApprovalRecordsInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSnapshot: OrderSnapshotCreateNestedOneWithoutExceptionTicketsInput
    scanRecords?: ScanRecordCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketUncheckedCreateWithoutApprovalRecordsInput = {
    id?: string
    ticketNo: string
    orderSnapshotId: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordUncheckedCreateNestedManyWithoutTicketInput
    compensationRecords?: CompensationRecordUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketCreateOrConnectWithoutApprovalRecordsInput = {
    where: ExceptionTicketWhereUniqueInput
    create: XOR<ExceptionTicketCreateWithoutApprovalRecordsInput, ExceptionTicketUncheckedCreateWithoutApprovalRecordsInput>
  }

  export type ExceptionTicketUpsertWithoutApprovalRecordsInput = {
    update: XOR<ExceptionTicketUpdateWithoutApprovalRecordsInput, ExceptionTicketUncheckedUpdateWithoutApprovalRecordsInput>
    create: XOR<ExceptionTicketCreateWithoutApprovalRecordsInput, ExceptionTicketUncheckedCreateWithoutApprovalRecordsInput>
    where?: ExceptionTicketWhereInput
  }

  export type ExceptionTicketUpdateToOneWithWhereWithoutApprovalRecordsInput = {
    where?: ExceptionTicketWhereInput
    data: XOR<ExceptionTicketUpdateWithoutApprovalRecordsInput, ExceptionTicketUncheckedUpdateWithoutApprovalRecordsInput>
  }

  export type ExceptionTicketUpdateWithoutApprovalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSnapshot?: OrderSnapshotUpdateOneRequiredWithoutExceptionTicketsNestedInput
    scanRecords?: ScanRecordUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketUncheckedUpdateWithoutApprovalRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUncheckedUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketCreateWithoutCompensationRecordsInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderSnapshot: OrderSnapshotCreateNestedOneWithoutExceptionTicketsInput
    scanRecords?: ScanRecordCreateNestedManyWithoutTicketInput
    approvalRecords?: ApprovalRecordCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketUncheckedCreateWithoutCompensationRecordsInput = {
    id?: string
    ticketNo: string
    orderSnapshotId: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    scanRecords?: ScanRecordUncheckedCreateNestedManyWithoutTicketInput
    approvalRecords?: ApprovalRecordUncheckedCreateNestedManyWithoutTicketInput
  }

  export type ExceptionTicketCreateOrConnectWithoutCompensationRecordsInput = {
    where: ExceptionTicketWhereUniqueInput
    create: XOR<ExceptionTicketCreateWithoutCompensationRecordsInput, ExceptionTicketUncheckedCreateWithoutCompensationRecordsInput>
  }

  export type ExceptionTicketUpsertWithoutCompensationRecordsInput = {
    update: XOR<ExceptionTicketUpdateWithoutCompensationRecordsInput, ExceptionTicketUncheckedUpdateWithoutCompensationRecordsInput>
    create: XOR<ExceptionTicketCreateWithoutCompensationRecordsInput, ExceptionTicketUncheckedCreateWithoutCompensationRecordsInput>
    where?: ExceptionTicketWhereInput
  }

  export type ExceptionTicketUpdateToOneWithWhereWithoutCompensationRecordsInput = {
    where?: ExceptionTicketWhereInput
    data: XOR<ExceptionTicketUpdateWithoutCompensationRecordsInput, ExceptionTicketUncheckedUpdateWithoutCompensationRecordsInput>
  }

  export type ExceptionTicketUpdateWithoutCompensationRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSnapshot?: OrderSnapshotUpdateOneRequiredWithoutExceptionTicketsNestedInput
    scanRecords?: ScanRecordUpdateManyWithoutTicketNestedInput
    approvalRecords?: ApprovalRecordUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketUncheckedUpdateWithoutCompensationRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUncheckedUpdateManyWithoutTicketNestedInput
    approvalRecords?: ApprovalRecordUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketCreateManyOrderSnapshotInput = {
    id?: string
    ticketNo: string
    exceptionType: string
    source: string
    category: string
    description: string
    status?: string
    priority?: string
    currentApprovalLevel?: number
    resubmitCount?: number
    maxResubmitCount?: number
    submittedBy: string
    submittedAt?: Date | string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScanRecordCreateManyOrderSnapshotInput = {
    id?: string
    scanId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    ticketId?: string | null
    createdAt?: Date | string
  }

  export type ExceptionTicketUpdateWithoutOrderSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUpdateManyWithoutTicketNestedInput
    approvalRecords?: ApprovalRecordUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketUncheckedUpdateWithoutOrderSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scanRecords?: ScanRecordUncheckedUpdateManyWithoutTicketNestedInput
    approvalRecords?: ApprovalRecordUncheckedUpdateManyWithoutTicketNestedInput
    compensationRecords?: CompensationRecordUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type ExceptionTicketUncheckedUpdateManyWithoutOrderSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketNo?: StringFieldUpdateOperationsInput | string
    exceptionType?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    priority?: StringFieldUpdateOperationsInput | string
    currentApprovalLevel?: IntFieldUpdateOperationsInput | number
    resubmitCount?: IntFieldUpdateOperationsInput | number
    maxResubmitCount?: IntFieldUpdateOperationsInput | number
    submittedBy?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordUpdateWithoutOrderSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: ExceptionTicketUpdateOneWithoutScanRecordsNestedInput
  }

  export type ScanRecordUncheckedUpdateWithoutOrderSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordUncheckedUpdateManyWithoutOrderSnapshotInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordCreateManyTicketInput = {
    id?: string
    scanId: string
    orderSnapshotId: string
    skuCode: string
    skuName: string
    scannedQuantity: number
    scanTime?: Date | string
    operator: string
    deviceId?: string | null
    qcResult: string
    qcRuleId?: string | null
    qcRuleName?: string | null
    qcDescription?: string | null
    batchStatus: string
    createdAt?: Date | string
  }

  export type ApprovalRecordCreateManyTicketInput = {
    id?: string
    approvalLevel: number
    approverId: string
    approverName: string
    action: string
    comment: string
    approvedAt: Date | string
    createdAt?: Date | string
  }

  export type CompensationRecordCreateManyTicketInput = {
    id?: string
    approvalRecordId: string
    amount: number
    direction: string
    status?: string
    reason: string
    paymentMethod?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScanRecordUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderSnapshot?: OrderSnapshotUpdateOneRequiredWithoutScanRecordsNestedInput
  }

  export type ScanRecordUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScanRecordUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    scanId?: StringFieldUpdateOperationsInput | string
    orderSnapshotId?: StringFieldUpdateOperationsInput | string
    skuCode?: StringFieldUpdateOperationsInput | string
    skuName?: StringFieldUpdateOperationsInput | string
    scannedQuantity?: IntFieldUpdateOperationsInput | number
    scanTime?: DateTimeFieldUpdateOperationsInput | Date | string
    operator?: StringFieldUpdateOperationsInput | string
    deviceId?: NullableStringFieldUpdateOperationsInput | string | null
    qcResult?: StringFieldUpdateOperationsInput | string
    qcRuleId?: NullableStringFieldUpdateOperationsInput | string | null
    qcRuleName?: NullableStringFieldUpdateOperationsInput | string | null
    qcDescription?: NullableStringFieldUpdateOperationsInput | string | null
    batchStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRecordUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRecordUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApprovalRecordUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalLevel?: IntFieldUpdateOperationsInput | number
    approverId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    approvedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationRecordUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationRecordUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompensationRecordUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    approvalRecordId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    direction?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}