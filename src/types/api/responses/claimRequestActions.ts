export interface OraclePolicyMatch {
    ply_covernumber: string;
    ply_verno: string;
    ply_clientnumber: string;
    ply_riskcode: string;
    ply_effdate: string; // YYYY-MM-DD
    ply_current: '-1' | '0'; // '-1' = yes, '0' = no
    client?: {
        cli_clientnumber: string;
        cli_emailaddress?: string;
    }
}
