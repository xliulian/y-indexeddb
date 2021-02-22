export const PREFERRED_TRIM_SIZE: 500;
export function fetchUpdates(idbPersistence: IndexeddbPersistence): Promise<IDBObjectStore>;
export function storeState(idbPersistence: IndexeddbPersistence, forceStore?: boolean): Promise<void>;
export function clearDocument(name: string): Promise<any>;
/**
 * @extends Observable<string>
 */
export class IndexeddbPersistence extends Observable<string> {
    /**
     * @param {string} name
     * @param {Y.Doc} doc
     */
    constructor(name: string, doc: Y.Doc);
    doc: Y.Doc;
    name: string;
    _mux: mutex.mutex;
    _dbref: number;
    _dbsize: number;
    /**
     * @type {IDBDatabase|null}
     */
    db: IDBDatabase | null;
    synced: boolean;
    _db: Promise<IDBDatabase>;
    getDB: () => Promise<IDBDatabase>;
    /**
     * @type {Promise<IndexeddbPersistence>}
     */
    whenSynced: Promise<IndexeddbPersistence>;
    /**
     * Timeout in ms untill data is merged and persisted in idb.
     */
    _storeTimeout: number;
    /**
     * @type {any}
     */
    _storeTimeoutId: any;
    /**
     * @param {Uint8Array} update
     */
    _storeUpdate: (update: Uint8Array) => any;
    /**
     * Destroys this instance and removes all data from indexeddb.
     *
     * @return {Promise<void>}
     */
    clearData(): Promise<void>;
    /**
     * @param {String | number | ArrayBuffer | Date} key
     * @return {Promise<String | number | ArrayBuffer | Date | any>}
     */
    get(key: string | number | ArrayBuffer | Date): Promise<string | number | ArrayBuffer | Date | any>;
    /**
     * @param {String | number | ArrayBuffer | Date} key
     * @param {String | number | ArrayBuffer | Date} value
     * @return {Promise<String | number | ArrayBuffer | Date>}
     */
    set(key: string | number | ArrayBuffer | Date, value: string | number | ArrayBuffer | Date): Promise<string | number | ArrayBuffer | Date>;
    /**
     * @param {String | number | ArrayBuffer | Date} key
     * @return {Promise<undefined>}
     */
    del(key: string | number | ArrayBuffer | Date): Promise<undefined>;
}
import { Observable } from "lib0/observable";
import * as Y from "yjs";
import * as mutex from "lib0/mutex";
//# sourceMappingURL=y-indexeddb.d.ts.map