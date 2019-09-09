import * as semsort from "../src";

((): void => {

    const semvarArrayUnsorted = [
        "v1.2.3-pre1-alpha",
        "v5.5.501",
        "v1.2.3-pre2-alpha",
        "v1.2.3-pre2-alpha2",
        "v5.2.1",
        "v5.5.22",
        "v8.0.0",
        "v0.21.1",
        "v6.22.9"
    ]

    console.log("original unsorted:");
    console.log(semvarArrayUnsorted);

    const resultAscending = semsort.asc(semvarArrayUnsorted);

    console.log("ascending result:");
    console.log(resultAscending);

    const resultDescending = semsort.desc(semvarArrayUnsorted);

    console.log("descending result:");
    console.log(resultDescending);
})();
