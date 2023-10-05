// https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/credentials_aws
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialsAwsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/credentials_aws#account_id CredentialsAws#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/credentials_aws#iamrole CredentialsAws#iamrole}
  */
  readonly iamrole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/credentials_aws#id CredentialsAws#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/credentials_aws spotinst_credentials_aws}
*/
export class CredentialsAws extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_credentials_aws";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.143.0/docs/resources/credentials_aws spotinst_credentials_aws} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialsAwsConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialsAwsConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_credentials_aws',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.143.0',
        providerVersionConstraint: '~> 1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._iamrole = config.iamrole;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // iamrole - computed: false, optional: false, required: true
  private _iamrole?: string; 
  public get iamrole() {
    return this.getStringAttribute('iamrole');
  }
  public set iamrole(value: string) {
    this._iamrole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iamroleInput() {
    return this._iamrole;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      iamrole: cdktf.stringToTerraform(this._iamrole),
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
