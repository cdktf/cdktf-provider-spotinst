// https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_spark_virtual_node_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OceanSparkVirtualNodeGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_spark_virtual_node_group#id OceanSparkVirtualNodeGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_spark_virtual_node_group#ocean_spark_cluster_id OceanSparkVirtualNodeGroup#ocean_spark_cluster_id}
  */
  readonly oceanSparkClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_spark_virtual_node_group#virtual_node_group_id OceanSparkVirtualNodeGroup#virtual_node_group_id}
  */
  readonly virtualNodeGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_spark_virtual_node_group spotinst_ocean_spark_virtual_node_group}
*/
export class OceanSparkVirtualNodeGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_ocean_spark_virtual_node_group";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.125.0/docs/resources/ocean_spark_virtual_node_group spotinst_ocean_spark_virtual_node_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OceanSparkVirtualNodeGroupConfig
  */
  public constructor(scope: Construct, id: string, config: OceanSparkVirtualNodeGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_ocean_spark_virtual_node_group',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.125.0',
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
    this._id = config.id;
    this._oceanSparkClusterId = config.oceanSparkClusterId;
    this._virtualNodeGroupId = config.virtualNodeGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ocean_spark_cluster_id - computed: false, optional: false, required: true
  private _oceanSparkClusterId?: string; 
  public get oceanSparkClusterId() {
    return this.getStringAttribute('ocean_spark_cluster_id');
  }
  public set oceanSparkClusterId(value: string) {
    this._oceanSparkClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oceanSparkClusterIdInput() {
    return this._oceanSparkClusterId;
  }

  // virtual_node_group_id - computed: false, optional: false, required: true
  private _virtualNodeGroupId?: string; 
  public get virtualNodeGroupId() {
    return this.getStringAttribute('virtual_node_group_id');
  }
  public set virtualNodeGroupId(value: string) {
    this._virtualNodeGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeGroupIdInput() {
    return this._virtualNodeGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ocean_spark_cluster_id: cdktf.stringToTerraform(this._oceanSparkClusterId),
      virtual_node_group_id: cdktf.stringToTerraform(this._virtualNodeGroupId),
    };
  }
}
