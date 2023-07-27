/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MultaiListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#balancer_id MultaiListener#balancer_id}
  */
  readonly balancerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#id MultaiListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#port MultaiListener#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#protocol MultaiListener#protocol}
  */
  readonly protocol: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#tags MultaiListener#tags}
  */
  readonly tags?: MultaiListenerTags[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#tls_config MultaiListener#tls_config}
  */
  readonly tlsConfig?: MultaiListenerTlsConfig;
}
export interface MultaiListenerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#key MultaiListener#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#value MultaiListener#value}
  */
  readonly value: string;
}

export function multaiListenerTagsToTerraform(struct?: MultaiListenerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class MultaiListenerTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): MultaiListenerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultaiListenerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MultaiListenerTagsList extends cdktf.ComplexList {
  public internalValue? : MultaiListenerTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): MultaiListenerTagsOutputReference {
    return new MultaiListenerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MultaiListenerTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#certificate_ids MultaiListener#certificate_ids}
  */
  readonly certificateIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#cipher_suites MultaiListener#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#max_version MultaiListener#max_version}
  */
  readonly maxVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#min_version MultaiListener#min_version}
  */
  readonly minVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#prefer_server_cipher_suites MultaiListener#prefer_server_cipher_suites}
  */
  readonly preferServerCipherSuites: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener#session_tickets_disabled MultaiListener#session_tickets_disabled}
  */
  readonly sessionTicketsDisabled: boolean | cdktf.IResolvable;
}

export function multaiListenerTlsConfigToTerraform(struct?: MultaiListenerTlsConfigOutputReference | MultaiListenerTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.certificateIds),
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
    prefer_server_cipher_suites: cdktf.booleanToTerraform(struct!.preferServerCipherSuites),
    session_tickets_disabled: cdktf.booleanToTerraform(struct!.sessionTicketsDisabled),
  }
}

export class MultaiListenerTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MultaiListenerTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateIds = this._certificateIds;
    }
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    if (this._preferServerCipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferServerCipherSuites = this._preferServerCipherSuites;
    }
    if (this._sessionTicketsDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionTicketsDisabled = this._sessionTicketsDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MultaiListenerTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateIds = undefined;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
      this._preferServerCipherSuites = undefined;
      this._sessionTicketsDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateIds = value.certificateIds;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
      this._preferServerCipherSuites = value.preferServerCipherSuites;
      this._sessionTicketsDisabled = value.sessionTicketsDisabled;
    }
  }

  // certificate_ids - computed: false, optional: false, required: true
  private _certificateIds?: string[]; 
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }
  public set certificateIds(value: string[]) {
    this._certificateIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdsInput() {
    return this._certificateIds;
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: false, required: true
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: false, required: true
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }

  // prefer_server_cipher_suites - computed: false, optional: false, required: true
  private _preferServerCipherSuites?: boolean | cdktf.IResolvable; 
  public get preferServerCipherSuites() {
    return this.getBooleanAttribute('prefer_server_cipher_suites');
  }
  public set preferServerCipherSuites(value: boolean | cdktf.IResolvable) {
    this._preferServerCipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferServerCipherSuitesInput() {
    return this._preferServerCipherSuites;
  }

  // session_tickets_disabled - computed: false, optional: false, required: true
  private _sessionTicketsDisabled?: boolean | cdktf.IResolvable; 
  public get sessionTicketsDisabled() {
    return this.getBooleanAttribute('session_tickets_disabled');
  }
  public set sessionTicketsDisabled(value: boolean | cdktf.IResolvable) {
    this._sessionTicketsDisabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTicketsDisabledInput() {
    return this._sessionTicketsDisabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener spotinst_multai_listener}
*/
export class MultaiListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_multai_listener";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.129.0/docs/resources/multai_listener spotinst_multai_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MultaiListenerConfig
  */
  public constructor(scope: Construct, id: string, config: MultaiListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_multai_listener',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.129.0',
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
    this._balancerId = config.balancerId;
    this._id = config.id;
    this._port = config.port;
    this._protocol = config.protocol;
    this._tags.internalValue = config.tags;
    this._tlsConfig.internalValue = config.tlsConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balancer_id - computed: false, optional: false, required: true
  private _balancerId?: string; 
  public get balancerId() {
    return this.getStringAttribute('balancer_id');
  }
  public set balancerId(value: string) {
    this._balancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerIdInput() {
    return this._balancerId;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new MultaiListenerTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: MultaiListenerTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new MultaiListenerTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: MultaiListenerTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balancer_id: cdktf.stringToTerraform(this._balancerId),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      tags: cdktf.listMapper(multaiListenerTagsToTerraform, true)(this._tags.internalValue),
      tls_config: multaiListenerTlsConfigToTerraform(this._tlsConfig.internalValue),
    };
  }
}
