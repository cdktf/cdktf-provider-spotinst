# `spotinst_ocean_aks`

Refer to the Terraform Registory for docs: [`spotinst_ocean_aks`](https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks).

# `oceanAks` Submodule <a name="`oceanAks` Submodule" id="@cdktf/provider-spotinst.oceanAks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanAks <a name="OceanAks" id="@cdktf/provider-spotinst.oceanAks.OceanAks"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks spotinst_ocean_aks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAks;

OceanAks.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .acdIdentifier(java.lang.String)
    .aksName(java.lang.String)
    .aksResourceGroupName(java.lang.String)
    .name(java.lang.String)
    .sshPublicKey(java.lang.String)
//  .autoscaler(OceanAksAutoscaler)
//  .controllerClusterId(java.lang.String)
//  .customData(java.lang.String)
//  .extension(IResolvable)
//  .extension(java.util.List<OceanAksExtension>)
//  .health(OceanAksHealth)
//  .id(java.lang.String)
//  .image(IResolvable)
//  .image(java.util.List<OceanAksImage>)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<OceanAksLoadBalancer>)
//  .managedServiceIdentity(IResolvable)
//  .managedServiceIdentity(java.util.List<OceanAksManagedServiceIdentity>)
//  .maxPods(java.lang.Number)
//  .network(OceanAksNetwork)
//  .osDisk(OceanAksOsDisk)
//  .resourceGroupName(java.lang.String)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanAksStrategy>)
//  .tag(IResolvable)
//  .tag(java.util.List<OceanAksTag>)
//  .userName(java.lang.String)
//  .vmSizes(IResolvable)
//  .vmSizes(java.util.List<OceanAksVmSizes>)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.acdIdentifier">acdIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#acd_identifier OceanAks#acd_identifier}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.aksName">aksName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_name OceanAks#aks_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.aksResourceGroupName">aksResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#ssh_public_key OceanAks#ssh_public_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#custom_data OceanAks#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.extension">extension</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>></code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#id OceanAks#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.image">image</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.managedServiceIdentity">managedServiceIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>></code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_pods OceanAks#max_pods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#user_name OceanAks#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.vmSizes">vmSizes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>></code> | vm_sizes block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#zones OceanAks#zones}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acdIdentifier`<sup>Required</sup> <a name="acdIdentifier" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.acdIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#acd_identifier OceanAks#acd_identifier}.

---

##### `aksName`<sup>Required</sup> <a name="aksName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.aksName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_name OceanAks#aks_name}.

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.aksResourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.sshPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#ssh_public_key OceanAks#ssh_public_key}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.autoscaler"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#autoscaler OceanAks#autoscaler}

---

##### `controllerClusterId`<sup>Optional</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.controllerClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.customData"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#custom_data OceanAks#custom_data}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.extension"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#extension OceanAks#extension}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.health"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#health OceanAks#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#id OceanAks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.image"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#image OceanAks#image}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.loadBalancer"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#load_balancer OceanAks#load_balancer}

---

##### `managedServiceIdentity`<sup>Optional</sup> <a name="managedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.managedServiceIdentity"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>>

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#managed_service_identity OceanAks#managed_service_identity}

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.maxPods"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_pods OceanAks#max_pods}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.network"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#network OceanAks#network}

---

##### `osDisk`<sup>Optional</sup> <a name="osDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.osDisk"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#os_disk OceanAks#os_disk}

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.strategy"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#strategy OceanAks#strategy}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.tag"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#tag OceanAks#tag}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.userName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#user_name OceanAks#user_name}.

---

##### `vmSizes`<sup>Optional</sup> <a name="vmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.vmSizes"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>>

vm_sizes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#vm_sizes OceanAks#vm_sizes}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-spotinst.oceanAks.OceanAks.Initializer.parameter.zones"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#zones OceanAks#zones}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putAutoscaler">putAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putExtension">putExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putHealth">putHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putImage">putImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putManagedServiceIdentity">putManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putOsDisk">putOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putStrategy">putStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.putVmSizes">putVmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetAutoscaler">resetAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetControllerClusterId">resetControllerClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetCustomData">resetCustomData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetExtension">resetExtension</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetHealth">resetHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetImage">resetImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetManagedServiceIdentity">resetManagedServiceIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetMaxPods">resetMaxPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetOsDisk">resetOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetUserName">resetUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetVmSizes">resetVmSizes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.resetZones">resetZones</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAks.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanAks.OceanAks.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanAks.OceanAks.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putAutoscaler` <a name="putAutoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putAutoscaler"></a>

```java
public void putAutoscaler(OceanAksAutoscaler value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putAutoscaler.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

---

##### `putExtension` <a name="putExtension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putExtension"></a>

```java
public void putExtension(IResolvable OR java.util.List<OceanAksExtension> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putExtension.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>>

---

##### `putHealth` <a name="putHealth" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putHealth"></a>

```java
public void putHealth(OceanAksHealth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putHealth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

---

##### `putImage` <a name="putImage" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putImage"></a>

```java
public void putImage(IResolvable OR java.util.List<OceanAksImage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putImage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putLoadBalancer"></a>

```java
public void putLoadBalancer(IResolvable OR java.util.List<OceanAksLoadBalancer> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putLoadBalancer.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>>

---

##### `putManagedServiceIdentity` <a name="putManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putManagedServiceIdentity"></a>

```java
public void putManagedServiceIdentity(IResolvable OR java.util.List<OceanAksManagedServiceIdentity> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putManagedServiceIdentity.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putNetwork"></a>

```java
public void putNetwork(OceanAksNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

---

##### `putOsDisk` <a name="putOsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putOsDisk"></a>

```java
public void putOsDisk(OceanAksOsDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putOsDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

---

##### `putStrategy` <a name="putStrategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putStrategy"></a>

```java
public void putStrategy(IResolvable OR java.util.List<OceanAksStrategy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putStrategy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putTag"></a>

```java
public void putTag(IResolvable OR java.util.List<OceanAksTag> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putTag.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>>

---

##### `putVmSizes` <a name="putVmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putVmSizes"></a>

```java
public void putVmSizes(IResolvable OR java.util.List<OceanAksVmSizes> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAks.putVmSizes.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>>

---

##### `resetAutoscaler` <a name="resetAutoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetAutoscaler"></a>

```java
public void resetAutoscaler()
```

##### `resetControllerClusterId` <a name="resetControllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetControllerClusterId"></a>

```java
public void resetControllerClusterId()
```

##### `resetCustomData` <a name="resetCustomData" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetCustomData"></a>

```java
public void resetCustomData()
```

##### `resetExtension` <a name="resetExtension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetExtension"></a>

```java
public void resetExtension()
```

##### `resetHealth` <a name="resetHealth" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetHealth"></a>

```java
public void resetHealth()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetId"></a>

```java
public void resetId()
```

##### `resetImage` <a name="resetImage" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetImage"></a>

```java
public void resetImage()
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetLoadBalancer"></a>

```java
public void resetLoadBalancer()
```

##### `resetManagedServiceIdentity` <a name="resetManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetManagedServiceIdentity"></a>

```java
public void resetManagedServiceIdentity()
```

##### `resetMaxPods` <a name="resetMaxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetMaxPods"></a>

```java
public void resetMaxPods()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetOsDisk` <a name="resetOsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetOsDisk"></a>

```java
public void resetOsDisk()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetStrategy"></a>

```java
public void resetStrategy()
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetTag"></a>

```java
public void resetTag()
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetUserName"></a>

```java
public void resetUserName()
```

##### `resetVmSizes` <a name="resetVmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetVmSizes"></a>

```java
public void resetVmSizes()
```

##### `resetZones` <a name="resetZones" id="@cdktf/provider-spotinst.oceanAks.OceanAks.resetZones"></a>

```java
public void resetZones()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAks;

OceanAks.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAks;

OceanAks.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAks;

OceanAks.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanAks.OceanAks.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference">OceanAksAutoscalerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.extension">extension</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList">OceanAksExtensionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference">OceanAksHealthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.image">image</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList">OceanAksImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList">OceanAksLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentity">managedServiceIdentity</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList">OceanAksManagedServiceIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference">OceanAksNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference">OceanAksOsDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategy">strategy</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList">OceanAksStrategyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList">OceanAksTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizes">vmSizes</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList">OceanAksVmSizesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifierInput">acdIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksNameInput">aksNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupNameInput">aksResourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscalerInput">autoscalerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterIdInput">controllerClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.customDataInput">customDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.extensionInput">extensionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.healthInput">healthInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.imageInput">imageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancerInput">loadBalancerInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentityInput">managedServiceIdentityInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPodsInput">maxPodsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDiskInput">osDiskInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKeyInput">sshPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategyInput">strategyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.tagInput">tagInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizesInput">vmSizesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.zonesInput">zonesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifier">acdIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksName">aksName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupName">aksResourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.customData">customData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autoscaler`<sup>Required</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscaler"></a>

```java
public OceanAksAutoscalerOutputReference getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference">OceanAksAutoscalerOutputReference</a>

---

##### `extension`<sup>Required</sup> <a name="extension" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.extension"></a>

```java
public OceanAksExtensionList getExtension();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList">OceanAksExtensionList</a>

---

##### `health`<sup>Required</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.health"></a>

```java
public OceanAksHealthOutputReference getHealth();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference">OceanAksHealthOutputReference</a>

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.image"></a>

```java
public OceanAksImageList getImage();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList">OceanAksImageList</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancer"></a>

```java
public OceanAksLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList">OceanAksLoadBalancerList</a>

---

##### `managedServiceIdentity`<sup>Required</sup> <a name="managedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentity"></a>

```java
public OceanAksManagedServiceIdentityList getManagedServiceIdentity();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList">OceanAksManagedServiceIdentityList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.network"></a>

```java
public OceanAksNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference">OceanAksNetworkOutputReference</a>

---

##### `osDisk`<sup>Required</sup> <a name="osDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDisk"></a>

```java
public OceanAksOsDiskOutputReference getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference">OceanAksOsDiskOutputReference</a>

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategy"></a>

```java
public OceanAksStrategyList getStrategy();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList">OceanAksStrategyList</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.tag"></a>

```java
public OceanAksTagList getTag();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList">OceanAksTagList</a>

---

##### `vmSizes`<sup>Required</sup> <a name="vmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizes"></a>

```java
public OceanAksVmSizesList getVmSizes();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList">OceanAksVmSizesList</a>

---

##### `acdIdentifierInput`<sup>Optional</sup> <a name="acdIdentifierInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifierInput"></a>

```java
public java.lang.String getAcdIdentifierInput();
```

- *Type:* java.lang.String

---

##### `aksNameInput`<sup>Optional</sup> <a name="aksNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksNameInput"></a>

```java
public java.lang.String getAksNameInput();
```

- *Type:* java.lang.String

---

##### `aksResourceGroupNameInput`<sup>Optional</sup> <a name="aksResourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupNameInput"></a>

```java
public java.lang.String getAksResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `autoscalerInput`<sup>Optional</sup> <a name="autoscalerInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.autoscalerInput"></a>

```java
public OceanAksAutoscaler getAutoscalerInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

---

##### `controllerClusterIdInput`<sup>Optional</sup> <a name="controllerClusterIdInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterIdInput"></a>

```java
public java.lang.String getControllerClusterIdInput();
```

- *Type:* java.lang.String

---

##### `customDataInput`<sup>Optional</sup> <a name="customDataInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.customDataInput"></a>

```java
public java.lang.String getCustomDataInput();
```

- *Type:* java.lang.String

---

##### `extensionInput`<sup>Optional</sup> <a name="extensionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.extensionInput"></a>

```java
public java.lang.Object getExtensionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>>

---

##### `healthInput`<sup>Optional</sup> <a name="healthInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.healthInput"></a>

```java
public OceanAksHealth getHealthInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.imageInput"></a>

```java
public java.lang.Object getImageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>>

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.loadBalancerInput"></a>

```java
public java.lang.Object getLoadBalancerInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>>

---

##### `managedServiceIdentityInput`<sup>Optional</sup> <a name="managedServiceIdentityInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.managedServiceIdentityInput"></a>

```java
public java.lang.Object getManagedServiceIdentityInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>>

---

##### `maxPodsInput`<sup>Optional</sup> <a name="maxPodsInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPodsInput"></a>

```java
public java.lang.Number getMaxPodsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.networkInput"></a>

```java
public OceanAksNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

---

##### `osDiskInput`<sup>Optional</sup> <a name="osDiskInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.osDiskInput"></a>

```java
public OceanAksOsDisk getOsDiskInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `sshPublicKeyInput`<sup>Optional</sup> <a name="sshPublicKeyInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKeyInput"></a>

```java
public java.lang.String getSshPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.strategyInput"></a>

```java
public java.lang.Object getStrategyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>>

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.tagInput"></a>

```java
public java.lang.Object getTagInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>>

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `vmSizesInput`<sup>Optional</sup> <a name="vmSizesInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.vmSizesInput"></a>

```java
public java.lang.Object getVmSizesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>>

---

##### `zonesInput`<sup>Optional</sup> <a name="zonesInput" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.zonesInput"></a>

```java
public java.util.List<java.lang.String> getZonesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acdIdentifier`<sup>Required</sup> <a name="acdIdentifier" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.acdIdentifier"></a>

```java
public java.lang.String getAcdIdentifier();
```

- *Type:* java.lang.String

---

##### `aksName`<sup>Required</sup> <a name="aksName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksName"></a>

```java
public java.lang.String getAksName();
```

- *Type:* java.lang.String

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.aksResourceGroupName"></a>

```java
public java.lang.String getAksResourceGroupName();
```

- *Type:* java.lang.String

---

##### `controllerClusterId`<sup>Required</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.controllerClusterId"></a>

```java
public java.lang.String getControllerClusterId();
```

- *Type:* java.lang.String

---

##### `customData`<sup>Required</sup> <a name="customData" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxPods`<sup>Required</sup> <a name="maxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `zones`<sup>Required</sup> <a name="zones" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAks.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanAks.OceanAks.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OceanAksAutoscaler <a name="OceanAksAutoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscaler;

OceanAksAutoscaler.builder()
//  .autoscaleDown(OceanAksAutoscalerAutoscaleDown)
//  .autoscaleHeadroom(OceanAksAutoscalerAutoscaleHeadroom)
//  .autoscaleIsEnabled(java.lang.Boolean)
//  .autoscaleIsEnabled(IResolvable)
//  .resourceLimits(OceanAksAutoscalerResourceLimits)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a></code> | autoscale_down block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a></code> | autoscale_headroom block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#autoscale_is_enabled OceanAks#autoscale_is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a></code> | resource_limits block. |

---

##### `autoscaleDown`<sup>Optional</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleDown"></a>

```java
public OceanAksAutoscalerAutoscaleDown getAutoscaleDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

autoscale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#autoscale_down OceanAks#autoscale_down}

---

##### `autoscaleHeadroom`<sup>Optional</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleHeadroom"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroom getAutoscaleHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

autoscale_headroom block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#autoscale_headroom OceanAks#autoscale_headroom}

---

##### `autoscaleIsEnabled`<sup>Optional</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.autoscaleIsEnabled"></a>

```java
public java.lang.Object getAutoscaleIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#autoscale_is_enabled OceanAks#autoscale_is_enabled}.

---

##### `resourceLimits`<sup>Optional</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler.property.resourceLimits"></a>

```java
public OceanAksAutoscalerResourceLimits getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

resource_limits block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_limits OceanAks#resource_limits}

---

### OceanAksAutoscalerAutoscaleDown <a name="OceanAksAutoscalerAutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerAutoscaleDown;

OceanAksAutoscalerAutoscaleDown.builder()
//  .maxScaleDownPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_scale_down_percentage OceanAks#max_scale_down_percentage}. |

---

##### `maxScaleDownPercentage`<sup>Optional</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_scale_down_percentage OceanAks#max_scale_down_percentage}.

---

### OceanAksAutoscalerAutoscaleHeadroom <a name="OceanAksAutoscalerAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerAutoscaleHeadroom;

OceanAksAutoscalerAutoscaleHeadroom.builder()
//  .automatic(OceanAksAutoscalerAutoscaleHeadroomAutomatic)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a></code> | automatic block. |

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom.property.automatic"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroomAutomatic getAutomatic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

automatic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#automatic OceanAks#automatic}

---

### OceanAksAutoscalerAutoscaleHeadroomAutomatic <a name="OceanAksAutoscalerAutoscaleHeadroomAutomatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerAutoscaleHeadroomAutomatic;

OceanAksAutoscalerAutoscaleHeadroomAutomatic.builder()
//  .isEnabled(java.lang.Boolean)
//  .isEnabled(IResolvable)
//  .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#is_enabled OceanAks#is_enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#percentage OceanAks#percentage}. |

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#is_enabled OceanAks#is_enabled}.

---

##### `percentage`<sup>Optional</sup> <a name="percentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#percentage OceanAks#percentage}.

---

### OceanAksAutoscalerResourceLimits <a name="OceanAksAutoscalerResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerResourceLimits;

OceanAksAutoscalerResourceLimits.builder()
//  .maxMemoryGib(java.lang.Number)
//  .maxVcpu(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_memory_gib OceanAks#max_memory_gib}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_vcpu OceanAks#max_vcpu}. |

---

##### `maxMemoryGib`<sup>Optional</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_memory_gib OceanAks#max_memory_gib}.

---

##### `maxVcpu`<sup>Optional</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_vcpu OceanAks#max_vcpu}.

---

### OceanAksConfig <a name="OceanAksConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksConfig;

OceanAksConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .acdIdentifier(java.lang.String)
    .aksName(java.lang.String)
    .aksResourceGroupName(java.lang.String)
    .name(java.lang.String)
    .sshPublicKey(java.lang.String)
//  .autoscaler(OceanAksAutoscaler)
//  .controllerClusterId(java.lang.String)
//  .customData(java.lang.String)
//  .extension(IResolvable)
//  .extension(java.util.List<OceanAksExtension>)
//  .health(OceanAksHealth)
//  .id(java.lang.String)
//  .image(IResolvable)
//  .image(java.util.List<OceanAksImage>)
//  .loadBalancer(IResolvable)
//  .loadBalancer(java.util.List<OceanAksLoadBalancer>)
//  .managedServiceIdentity(IResolvable)
//  .managedServiceIdentity(java.util.List<OceanAksManagedServiceIdentity>)
//  .maxPods(java.lang.Number)
//  .network(OceanAksNetwork)
//  .osDisk(OceanAksOsDisk)
//  .resourceGroupName(java.lang.String)
//  .strategy(IResolvable)
//  .strategy(java.util.List<OceanAksStrategy>)
//  .tag(IResolvable)
//  .tag(java.util.List<OceanAksTag>)
//  .userName(java.lang.String)
//  .vmSizes(IResolvable)
//  .vmSizes(java.util.List<OceanAksVmSizes>)
//  .zones(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.acdIdentifier">acdIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#acd_identifier OceanAks#acd_identifier}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksName">aksName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_name OceanAks#aks_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksResourceGroupName">aksResourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.sshPublicKey">sshPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#ssh_public_key OceanAks#ssh_public_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.autoscaler">autoscaler</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | autoscaler block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.controllerClusterId">controllerClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.customData">customData</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#custom_data OceanAks#custom_data}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.extension">extension</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>></code> | extension block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.health">health</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | health block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#id OceanAks#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.image">image</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>></code> | image block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.loadBalancer">loadBalancer</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.managedServiceIdentity">managedServiceIdentity</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>></code> | managed_service_identity block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.maxPods">maxPods</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_pods OceanAks#max_pods}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.osDisk">osDisk</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | os_disk block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.strategy">strategy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>></code> | strategy block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.tag">tag</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>></code> | tag block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#user_name OceanAks#user_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.vmSizes">vmSizes</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>></code> | vm_sizes block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.zones">zones</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#zones OceanAks#zones}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acdIdentifier`<sup>Required</sup> <a name="acdIdentifier" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.acdIdentifier"></a>

```java
public java.lang.String getAcdIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#acd_identifier OceanAks#acd_identifier}.

---

##### `aksName`<sup>Required</sup> <a name="aksName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksName"></a>

```java
public java.lang.String getAksName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_name OceanAks#aks_name}.

---

##### `aksResourceGroupName`<sup>Required</sup> <a name="aksResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.aksResourceGroupName"></a>

```java
public java.lang.String getAksResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#aks_resource_group_name OceanAks#aks_resource_group_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `sshPublicKey`<sup>Required</sup> <a name="sshPublicKey" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.sshPublicKey"></a>

```java
public java.lang.String getSshPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#ssh_public_key OceanAks#ssh_public_key}.

---

##### `autoscaler`<sup>Optional</sup> <a name="autoscaler" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.autoscaler"></a>

```java
public OceanAksAutoscaler getAutoscaler();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

autoscaler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#autoscaler OceanAks#autoscaler}

---

##### `controllerClusterId`<sup>Optional</sup> <a name="controllerClusterId" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.controllerClusterId"></a>

```java
public java.lang.String getControllerClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#controller_cluster_id OceanAks#controller_cluster_id}.

---

##### `customData`<sup>Optional</sup> <a name="customData" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.customData"></a>

```java
public java.lang.String getCustomData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#custom_data OceanAks#custom_data}.

---

##### `extension`<sup>Optional</sup> <a name="extension" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.extension"></a>

```java
public java.lang.Object getExtension();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>>

extension block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#extension OceanAks#extension}

---

##### `health`<sup>Optional</sup> <a name="health" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.health"></a>

```java
public OceanAksHealth getHealth();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

health block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#health OceanAks#health}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#id OceanAks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image`<sup>Optional</sup> <a name="image" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.image"></a>

```java
public java.lang.Object getImage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>>

image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#image OceanAks#image}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.loadBalancer"></a>

```java
public java.lang.Object getLoadBalancer();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#load_balancer OceanAks#load_balancer}

---

##### `managedServiceIdentity`<sup>Optional</sup> <a name="managedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.managedServiceIdentity"></a>

```java
public java.lang.Object getManagedServiceIdentity();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>>

managed_service_identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#managed_service_identity OceanAks#managed_service_identity}

---

##### `maxPods`<sup>Optional</sup> <a name="maxPods" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.maxPods"></a>

```java
public java.lang.Number getMaxPods();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#max_pods OceanAks#max_pods}.

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.network"></a>

```java
public OceanAksNetwork getNetwork();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#network OceanAks#network}

---

##### `osDisk`<sup>Optional</sup> <a name="osDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.osDisk"></a>

```java
public OceanAksOsDisk getOsDisk();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

os_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#os_disk OceanAks#os_disk}

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.strategy"></a>

```java
public java.lang.Object getStrategy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>>

strategy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#strategy OceanAks#strategy}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.tag"></a>

```java
public java.lang.Object getTag();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#tag OceanAks#tag}

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#user_name OceanAks#user_name}.

---

##### `vmSizes`<sup>Optional</sup> <a name="vmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.vmSizes"></a>

```java
public java.lang.Object getVmSizes();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>>

vm_sizes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#vm_sizes OceanAks#vm_sizes}

---

##### `zones`<sup>Optional</sup> <a name="zones" id="@cdktf/provider-spotinst.oceanAks.OceanAksConfig.property.zones"></a>

```java
public java.util.List<java.lang.String> getZones();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#zones OceanAks#zones}.

---

### OceanAksExtension <a name="OceanAksExtension" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksExtension;

OceanAksExtension.builder()
//  .apiVersion(java.lang.String)
//  .minorVersionAutoUpgrade(java.lang.Boolean)
//  .minorVersionAutoUpgrade(IResolvable)
//  .name(java.lang.String)
//  .publisher(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#api_version OceanAks#api_version}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.minorVersionAutoUpgrade">minorVersionAutoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#minor_version_auto_upgrade OceanAks#minor_version_auto_upgrade}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#publisher OceanAks#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#type OceanAks#type}. |

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#api_version OceanAks#api_version}.

---

##### `minorVersionAutoUpgrade`<sup>Optional</sup> <a name="minorVersionAutoUpgrade" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.minorVersionAutoUpgrade"></a>

```java
public java.lang.Object getMinorVersionAutoUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#minor_version_auto_upgrade OceanAks#minor_version_auto_upgrade}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#publisher OceanAks#publisher}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtension.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#type OceanAks#type}.

---

### OceanAksHealth <a name="OceanAksHealth" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealth.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksHealth;

OceanAksHealth.builder()
//  .gracePeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#grace_period OceanAks#grace_period}. |

---

##### `gracePeriod`<sup>Optional</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealth.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#grace_period OceanAks#grace_period}.

---

### OceanAksImage <a name="OceanAksImage" id="@cdktf/provider-spotinst.oceanAks.OceanAksImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksImage;

OceanAksImage.builder()
//  .marketplace(IResolvable)
//  .marketplace(java.util.List<OceanAksImageMarketplace>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage.property.marketplace">marketplace</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>></code> | marketplace block. |

---

##### `marketplace`<sup>Optional</sup> <a name="marketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImage.property.marketplace"></a>

```java
public java.lang.Object getMarketplace();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>>

marketplace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#marketplace OceanAks#marketplace}

---

### OceanAksImageMarketplace <a name="OceanAksImageMarketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksImageMarketplace;

OceanAksImageMarketplace.builder()
//  .offer(java.lang.String)
//  .publisher(java.lang.String)
//  .sku(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.offer">offer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#offer OceanAks#offer}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.publisher">publisher</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#publisher OceanAks#publisher}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.sku">sku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#sku OceanAks#sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.version">version</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#version OceanAks#version}. |

---

##### `offer`<sup>Optional</sup> <a name="offer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#offer OceanAks#offer}.

---

##### `publisher`<sup>Optional</sup> <a name="publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#publisher OceanAks#publisher}.

---

##### `sku`<sup>Optional</sup> <a name="sku" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#sku OceanAks#sku}.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#version OceanAks#version}.

---

### OceanAksLoadBalancer <a name="OceanAksLoadBalancer" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksLoadBalancer;

OceanAksLoadBalancer.builder()
//  .backendPoolNames(java.util.List<java.lang.String>)
//  .loadBalancerSku(java.lang.String)
//  .name(java.lang.String)
//  .resourceGroupName(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.backendPoolNames">backendPoolNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#backend_pool_names OceanAks#backend_pool_names}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.loadBalancerSku">loadBalancerSku</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#load_balancer_sku OceanAks#load_balancer_sku}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#type OceanAks#type}. |

---

##### `backendPoolNames`<sup>Optional</sup> <a name="backendPoolNames" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.backendPoolNames"></a>

```java
public java.util.List<java.lang.String> getBackendPoolNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#backend_pool_names OceanAks#backend_pool_names}.

---

##### `loadBalancerSku`<sup>Optional</sup> <a name="loadBalancerSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.loadBalancerSku"></a>

```java
public java.lang.String getLoadBalancerSku();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#load_balancer_sku OceanAks#load_balancer_sku}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#type OceanAks#type}.

---

### OceanAksManagedServiceIdentity <a name="OceanAksManagedServiceIdentity" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksManagedServiceIdentity;

OceanAksManagedServiceIdentity.builder()
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

### OceanAksNetwork <a name="OceanAksNetwork" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetwork;

OceanAksNetwork.builder()
//  .networkInterface(IResolvable)
//  .networkInterface(java.util.List<OceanAksNetworkNetworkInterface>)
//  .resourceGroupName(java.lang.String)
//  .virtualNetworkName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.networkInterface">networkInterface</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>></code> | network_interface block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.virtualNetworkName">virtualNetworkName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#virtual_network_name OceanAks#virtual_network_name}. |

---

##### `networkInterface`<sup>Optional</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.networkInterface"></a>

```java
public java.lang.Object getNetworkInterface();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>>

network_interface block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#network_interface OceanAks#network_interface}

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

##### `virtualNetworkName`<sup>Optional</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetwork.property.virtualNetworkName"></a>

```java
public java.lang.String getVirtualNetworkName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#virtual_network_name OceanAks#virtual_network_name}.

---

### OceanAksNetworkNetworkInterface <a name="OceanAksNetworkNetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterface;

OceanAksNetworkNetworkInterface.builder()
//  .additionalIpConfig(IResolvable)
//  .additionalIpConfig(java.util.List<OceanAksNetworkNetworkInterfaceAdditionalIpConfig>)
//  .assignPublicIp(java.lang.Boolean)
//  .assignPublicIp(IResolvable)
//  .isPrimary(java.lang.Boolean)
//  .isPrimary(IResolvable)
//  .securityGroup(OceanAksNetworkNetworkInterfaceSecurityGroup)
//  .subnetName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.additionalIpConfig">additionalIpConfig</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>></code> | additional_ip_config block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#assign_public_ip OceanAks#assign_public_ip}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#is_primary OceanAks#is_primary}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.securityGroup">securityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a></code> | security_group block. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#subnet_name OceanAks#subnet_name}. |

---

##### `additionalIpConfig`<sup>Optional</sup> <a name="additionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.additionalIpConfig"></a>

```java
public java.lang.Object getAdditionalIpConfig();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>>

additional_ip_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#additional_ip_config OceanAks#additional_ip_config}

---

##### `assignPublicIp`<sup>Optional</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#assign_public_ip OceanAks#assign_public_ip}.

---

##### `isPrimary`<sup>Optional</sup> <a name="isPrimary" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#is_primary OceanAks#is_primary}.

---

##### `securityGroup`<sup>Optional</sup> <a name="securityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.securityGroup"></a>

```java
public OceanAksNetworkNetworkInterfaceSecurityGroup getSecurityGroup();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

security_group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#security_group OceanAks#security_group}

---

##### `subnetName`<sup>Optional</sup> <a name="subnetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#subnet_name OceanAks#subnet_name}.

---

### OceanAksNetworkNetworkInterfaceAdditionalIpConfig <a name="OceanAksNetworkNetworkInterfaceAdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig;

OceanAksNetworkNetworkInterfaceAdditionalIpConfig.builder()
//  .name(java.lang.String)
//  .privateIpVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.privateIpVersion">privateIpVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#private_ip_version OceanAks#private_ip_version}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `privateIpVersion`<sup>Optional</sup> <a name="privateIpVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig.property.privateIpVersion"></a>

```java
public java.lang.String getPrivateIpVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#private_ip_version OceanAks#private_ip_version}.

---

### OceanAksNetworkNetworkInterfaceSecurityGroup <a name="OceanAksNetworkNetworkInterfaceSecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceSecurityGroup;

OceanAksNetworkNetworkInterfaceSecurityGroup.builder()
//  .name(java.lang.String)
//  .resourceGroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#name OceanAks#name}.

---

##### `resourceGroupName`<sup>Optional</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#resource_group_name OceanAks#resource_group_name}.

---

### OceanAksOsDisk <a name="OceanAksOsDisk" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksOsDisk;

OceanAksOsDisk.builder()
    .sizeGb(java.lang.Number)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#size_gb OceanAks#size_gb}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#type OceanAks#type}. |

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#size_gb OceanAks#size_gb}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#type OceanAks#type}.

---

### OceanAksStrategy <a name="OceanAksStrategy" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksStrategy;

OceanAksStrategy.builder()
//  .fallbackToOndemand(java.lang.Boolean)
//  .fallbackToOndemand(IResolvable)
//  .spotPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#fallback_to_ondemand OceanAks#fallback_to_ondemand}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#spot_percentage OceanAks#spot_percentage}. |

---

##### `fallbackToOndemand`<sup>Optional</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#fallback_to_ondemand OceanAks#fallback_to_ondemand}.

---

##### `spotPercentage`<sup>Optional</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategy.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#spot_percentage OceanAks#spot_percentage}.

---

### OceanAksTag <a name="OceanAksTag" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksTag;

OceanAksTag.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#key OceanAks#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#value OceanAks#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#key OceanAks#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksTag.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#value OceanAks#value}.

---

### OceanAksVmSizes <a name="OceanAksVmSizes" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksVmSizes;

OceanAksVmSizes.builder()
//  .whitelist(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes.property.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#whitelist OceanAks#whitelist}. |

---

##### `whitelist`<sup>Optional</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes.property.whitelist"></a>

```java
public java.util.List<java.lang.String> getWhitelist();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.136.0/docs/resources/ocean_aks#whitelist OceanAks#whitelist}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanAksAutoscalerAutoscaleDownOutputReference <a name="OceanAksAutoscalerAutoscaleDownOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerAutoscaleDownOutputReference;

new OceanAksAutoscalerAutoscaleDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage">resetMaxScaleDownPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxScaleDownPercentage` <a name="resetMaxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.resetMaxScaleDownPercentage"></a>

```java
public void resetMaxScaleDownPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput">maxScaleDownPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage">maxScaleDownPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxScaleDownPercentageInput`<sup>Optional</sup> <a name="maxScaleDownPercentageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentageInput"></a>

```java
public java.lang.Number getMaxScaleDownPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxScaleDownPercentage`<sup>Required</sup> <a name="maxScaleDownPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.maxScaleDownPercentage"></a>

```java
public java.lang.Number getMaxScaleDownPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference.property.internalValue"></a>

```java
public OceanAksAutoscalerAutoscaleDown getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

---


### OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference <a name="OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference;

new OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage">resetPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetPercentage` <a name="resetPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.resetPercentage"></a>

```java
public void resetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Object getIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.isEnabled"></a>

```java
public java.lang.Object getIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference.property.internalValue"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroomAutomatic getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

---


### OceanAksAutoscalerAutoscaleHeadroomOutputReference <a name="OceanAksAutoscalerAutoscaleHeadroomOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerAutoscaleHeadroomOutputReference;

new OceanAksAutoscalerAutoscaleHeadroomOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.putAutomatic">putAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic">resetAutomatic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutomatic` <a name="putAutomatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.putAutomatic"></a>

```java
public void putAutomatic(OceanAksAutoscalerAutoscaleHeadroomAutomatic value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.putAutomatic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.resetAutomatic"></a>

```java
public void resetAutomatic()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automatic">automatic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput">automaticInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automatic"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference getAutomatic();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference">OceanAksAutoscalerAutoscaleHeadroomAutomaticOutputReference</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.automaticInput"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroomAutomatic getAutomaticInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomAutomatic">OceanAksAutoscalerAutoscaleHeadroomAutomatic</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference.property.internalValue"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroom getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

---


### OceanAksAutoscalerOutputReference <a name="OceanAksAutoscalerOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerOutputReference;

new OceanAksAutoscalerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleDown">putAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleHeadroom">putAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putResourceLimits">putResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleDown">resetAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleHeadroom">resetAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleIsEnabled">resetAutoscaleIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetResourceLimits">resetResourceLimits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoscaleDown` <a name="putAutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleDown"></a>

```java
public void putAutoscaleDown(OceanAksAutoscalerAutoscaleDown value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleDown.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

---

##### `putAutoscaleHeadroom` <a name="putAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleHeadroom"></a>

```java
public void putAutoscaleHeadroom(OceanAksAutoscalerAutoscaleHeadroom value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putAutoscaleHeadroom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

---

##### `putResourceLimits` <a name="putResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putResourceLimits"></a>

```java
public void putResourceLimits(OceanAksAutoscalerResourceLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.putResourceLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

---

##### `resetAutoscaleDown` <a name="resetAutoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleDown"></a>

```java
public void resetAutoscaleDown()
```

##### `resetAutoscaleHeadroom` <a name="resetAutoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleHeadroom"></a>

```java
public void resetAutoscaleHeadroom()
```

##### `resetAutoscaleIsEnabled` <a name="resetAutoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetAutoscaleIsEnabled"></a>

```java
public void resetAutoscaleIsEnabled()
```

##### `resetResourceLimits` <a name="resetResourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.resetResourceLimits"></a>

```java
public void resetResourceLimits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDown">autoscaleDown</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference">OceanAksAutoscalerAutoscaleDownOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroom">autoscaleHeadroom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference">OceanAksAutoscalerAutoscaleHeadroomOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimits">resourceLimits</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference">OceanAksAutoscalerResourceLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDownInput">autoscaleDownInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroomInput">autoscaleHeadroomInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabledInput">autoscaleIsEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimitsInput">resourceLimitsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabled">autoscaleIsEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoscaleDown`<sup>Required</sup> <a name="autoscaleDown" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDown"></a>

```java
public OceanAksAutoscalerAutoscaleDownOutputReference getAutoscaleDown();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDownOutputReference">OceanAksAutoscalerAutoscaleDownOutputReference</a>

---

##### `autoscaleHeadroom`<sup>Required</sup> <a name="autoscaleHeadroom" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroom"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroomOutputReference getAutoscaleHeadroom();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroomOutputReference">OceanAksAutoscalerAutoscaleHeadroomOutputReference</a>

---

##### `resourceLimits`<sup>Required</sup> <a name="resourceLimits" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimits"></a>

```java
public OceanAksAutoscalerResourceLimitsOutputReference getResourceLimits();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference">OceanAksAutoscalerResourceLimitsOutputReference</a>

---

##### `autoscaleDownInput`<sup>Optional</sup> <a name="autoscaleDownInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleDownInput"></a>

```java
public OceanAksAutoscalerAutoscaleDown getAutoscaleDownInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleDown">OceanAksAutoscalerAutoscaleDown</a>

---

##### `autoscaleHeadroomInput`<sup>Optional</sup> <a name="autoscaleHeadroomInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleHeadroomInput"></a>

```java
public OceanAksAutoscalerAutoscaleHeadroom getAutoscaleHeadroomInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerAutoscaleHeadroom">OceanAksAutoscalerAutoscaleHeadroom</a>

---

##### `autoscaleIsEnabledInput`<sup>Optional</sup> <a name="autoscaleIsEnabledInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabledInput"></a>

```java
public java.lang.Object getAutoscaleIsEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceLimitsInput`<sup>Optional</sup> <a name="resourceLimitsInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.resourceLimitsInput"></a>

```java
public OceanAksAutoscalerResourceLimits getResourceLimitsInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

---

##### `autoscaleIsEnabled`<sup>Required</sup> <a name="autoscaleIsEnabled" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.autoscaleIsEnabled"></a>

```java
public java.lang.Object getAutoscaleIsEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerOutputReference.property.internalValue"></a>

```java
public OceanAksAutoscaler getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscaler">OceanAksAutoscaler</a>

---


### OceanAksAutoscalerResourceLimitsOutputReference <a name="OceanAksAutoscalerResourceLimitsOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksAutoscalerResourceLimitsOutputReference;

new OceanAksAutoscalerResourceLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib">resetMaxMemoryGib</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxVcpu">resetMaxVcpu</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxMemoryGib` <a name="resetMaxMemoryGib" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxMemoryGib"></a>

```java
public void resetMaxMemoryGib()
```

##### `resetMaxVcpu` <a name="resetMaxVcpu" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.resetMaxVcpu"></a>

```java
public void resetMaxVcpu()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput">maxMemoryGibInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpuInput">maxVcpuInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGib">maxMemoryGib</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpu">maxVcpu</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxMemoryGibInput`<sup>Optional</sup> <a name="maxMemoryGibInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGibInput"></a>

```java
public java.lang.Number getMaxMemoryGibInput();
```

- *Type:* java.lang.Number

---

##### `maxVcpuInput`<sup>Optional</sup> <a name="maxVcpuInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpuInput"></a>

```java
public java.lang.Number getMaxVcpuInput();
```

- *Type:* java.lang.Number

---

##### `maxMemoryGib`<sup>Required</sup> <a name="maxMemoryGib" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxMemoryGib"></a>

```java
public java.lang.Number getMaxMemoryGib();
```

- *Type:* java.lang.Number

---

##### `maxVcpu`<sup>Required</sup> <a name="maxVcpu" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.maxVcpu"></a>

```java
public java.lang.Number getMaxVcpu();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimitsOutputReference.property.internalValue"></a>

```java
public OceanAksAutoscalerResourceLimits getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksAutoscalerResourceLimits">OceanAksAutoscalerResourceLimits</a>

---


### OceanAksExtensionList <a name="OceanAksExtensionList" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksExtensionList;

new OceanAksExtensionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.get"></a>

```java
public OceanAksExtensionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>>

---


### OceanAksExtensionOutputReference <a name="OceanAksExtensionOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksExtensionOutputReference;

new OceanAksExtensionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetMinorVersionAutoUpgrade">resetMinorVersionAutoUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetApiVersion"></a>

```java
public void resetApiVersion()
```

##### `resetMinorVersionAutoUpgrade` <a name="resetMinorVersionAutoUpgrade" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetMinorVersionAutoUpgrade"></a>

```java
public void resetMinorVersionAutoUpgrade()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetPublisher"></a>

```java
public void resetPublisher()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgradeInput">minorVersionAutoUpgradeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgrade">minorVersionAutoUpgrade</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `minorVersionAutoUpgradeInput`<sup>Optional</sup> <a name="minorVersionAutoUpgradeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgradeInput"></a>

```java
public java.lang.Object getMinorVersionAutoUpgradeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `minorVersionAutoUpgrade`<sup>Required</sup> <a name="minorVersionAutoUpgrade" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.minorVersionAutoUpgrade"></a>

```java
public java.lang.Object getMinorVersionAutoUpgrade();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksExtensionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksExtension">OceanAksExtension</a>

---


### OceanAksHealthOutputReference <a name="OceanAksHealthOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksHealthOutputReference;

new OceanAksHealthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resetGracePeriod">resetGracePeriod</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGracePeriod` <a name="resetGracePeriod" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.resetGracePeriod"></a>

```java
public void resetGracePeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriodInput">gracePeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriod">gracePeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `gracePeriodInput`<sup>Optional</sup> <a name="gracePeriodInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriodInput"></a>

```java
public java.lang.Number getGracePeriodInput();
```

- *Type:* java.lang.Number

---

##### `gracePeriod`<sup>Required</sup> <a name="gracePeriod" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.gracePeriod"></a>

```java
public java.lang.Number getGracePeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksHealthOutputReference.property.internalValue"></a>

```java
public OceanAksHealth getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksHealth">OceanAksHealth</a>

---


### OceanAksImageList <a name="OceanAksImageList" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksImageList;

new OceanAksImageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.get"></a>

```java
public OceanAksImageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>>

---


### OceanAksImageMarketplaceList <a name="OceanAksImageMarketplaceList" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksImageMarketplaceList;

new OceanAksImageMarketplaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.get"></a>

```java
public OceanAksImageMarketplaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>>

---


### OceanAksImageMarketplaceOutputReference <a name="OceanAksImageMarketplaceOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksImageMarketplaceOutputReference;

new OceanAksImageMarketplaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetOffer">resetOffer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetPublisher">resetPublisher</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetSku">resetSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffer` <a name="resetOffer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetOffer"></a>

```java
public void resetOffer()
```

##### `resetPublisher` <a name="resetPublisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetPublisher"></a>

```java
public void resetPublisher()
```

##### `resetSku` <a name="resetSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetSku"></a>

```java
public void resetSku()
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offerInput">offerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisherInput">publisherInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.skuInput">skuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offer">offer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisher">publisher</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.sku">sku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `offerInput`<sup>Optional</sup> <a name="offerInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offerInput"></a>

```java
public java.lang.String getOfferInput();
```

- *Type:* java.lang.String

---

##### `publisherInput`<sup>Optional</sup> <a name="publisherInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisherInput"></a>

```java
public java.lang.String getPublisherInput();
```

- *Type:* java.lang.String

---

##### `skuInput`<sup>Optional</sup> <a name="skuInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.skuInput"></a>

```java
public java.lang.String getSkuInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `offer`<sup>Required</sup> <a name="offer" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.offer"></a>

```java
public java.lang.String getOffer();
```

- *Type:* java.lang.String

---

##### `publisher`<sup>Required</sup> <a name="publisher" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.publisher"></a>

```java
public java.lang.String getPublisher();
```

- *Type:* java.lang.String

---

##### `sku`<sup>Required</sup> <a name="sku" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.sku"></a>

```java
public java.lang.String getSku();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>

---


### OceanAksImageOutputReference <a name="OceanAksImageOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksImageOutputReference;

new OceanAksImageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.putMarketplace">putMarketplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resetMarketplace">resetMarketplace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMarketplace` <a name="putMarketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.putMarketplace"></a>

```java
public void putMarketplace(IResolvable OR java.util.List<OceanAksImageMarketplace> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.putMarketplace.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>>

---

##### `resetMarketplace` <a name="resetMarketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.resetMarketplace"></a>

```java
public void resetMarketplace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplace">marketplace</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList">OceanAksImageMarketplaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplaceInput">marketplaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `marketplace`<sup>Required</sup> <a name="marketplace" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplace"></a>

```java
public OceanAksImageMarketplaceList getMarketplace();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplaceList">OceanAksImageMarketplaceList</a>

---

##### `marketplaceInput`<sup>Optional</sup> <a name="marketplaceInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.marketplaceInput"></a>

```java
public java.lang.Object getMarketplaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImageMarketplace">OceanAksImageMarketplace</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksImageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksImage">OceanAksImage</a>

---


### OceanAksLoadBalancerList <a name="OceanAksLoadBalancerList" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksLoadBalancerList;

new OceanAksLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.get"></a>

```java
public OceanAksLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>>

---


### OceanAksLoadBalancerOutputReference <a name="OceanAksLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksLoadBalancerOutputReference;

new OceanAksLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetBackendPoolNames">resetBackendPoolNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetLoadBalancerSku">resetLoadBalancerSku</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBackendPoolNames` <a name="resetBackendPoolNames" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetBackendPoolNames"></a>

```java
public void resetBackendPoolNames()
```

##### `resetLoadBalancerSku` <a name="resetLoadBalancerSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetLoadBalancerSku"></a>

```java
public void resetLoadBalancerSku()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNamesInput">backendPoolNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSkuInput">loadBalancerSkuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNames">backendPoolNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSku">loadBalancerSku</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backendPoolNamesInput`<sup>Optional</sup> <a name="backendPoolNamesInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNamesInput"></a>

```java
public java.util.List<java.lang.String> getBackendPoolNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerSkuInput`<sup>Optional</sup> <a name="loadBalancerSkuInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSkuInput"></a>

```java
public java.lang.String getLoadBalancerSkuInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `backendPoolNames`<sup>Required</sup> <a name="backendPoolNames" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.backendPoolNames"></a>

```java
public java.util.List<java.lang.String> getBackendPoolNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerSku`<sup>Required</sup> <a name="loadBalancerSku" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.loadBalancerSku"></a>

```java
public java.lang.String getLoadBalancerSku();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancerOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksLoadBalancer">OceanAksLoadBalancer</a>

---


### OceanAksManagedServiceIdentityList <a name="OceanAksManagedServiceIdentityList" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksManagedServiceIdentityList;

new OceanAksManagedServiceIdentityList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.get"></a>

```java
public OceanAksManagedServiceIdentityOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>>

---


### OceanAksManagedServiceIdentityOutputReference <a name="OceanAksManagedServiceIdentityOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksManagedServiceIdentityOutputReference;

new OceanAksManagedServiceIdentityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentityOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksManagedServiceIdentity">OceanAksManagedServiceIdentity</a>

---


### OceanAksNetworkNetworkInterfaceAdditionalIpConfigList <a name="OceanAksNetworkNetworkInterfaceAdditionalIpConfigList" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList;

new OceanAksNetworkNetworkInterfaceAdditionalIpConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.get"></a>

```java
public OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>>

---


### OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference <a name="OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference;

new OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetPrivateIpVersion">resetPrivateIpVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPrivateIpVersion` <a name="resetPrivateIpVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.resetPrivateIpVersion"></a>

```java
public void resetPrivateIpVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersionInput">privateIpVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersion">privateIpVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateIpVersionInput`<sup>Optional</sup> <a name="privateIpVersionInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersionInput"></a>

```java
public java.lang.String getPrivateIpVersionInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateIpVersion`<sup>Required</sup> <a name="privateIpVersion" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.privateIpVersion"></a>

```java
public java.lang.String getPrivateIpVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>

---


### OceanAksNetworkNetworkInterfaceList <a name="OceanAksNetworkNetworkInterfaceList" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceList;

new OceanAksNetworkNetworkInterfaceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.get"></a>

```java
public OceanAksNetworkNetworkInterfaceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>>

---


### OceanAksNetworkNetworkInterfaceOutputReference <a name="OceanAksNetworkNetworkInterfaceOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceOutputReference;

new OceanAksNetworkNetworkInterfaceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putAdditionalIpConfig">putAdditionalIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putSecurityGroup">putSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfig">resetAdditionalIpConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAssignPublicIp">resetAssignPublicIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetIsPrimary">resetIsPrimary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSecurityGroup">resetSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSubnetName">resetSubnetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalIpConfig` <a name="putAdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putAdditionalIpConfig"></a>

```java
public void putAdditionalIpConfig(IResolvable OR java.util.List<OceanAksNetworkNetworkInterfaceAdditionalIpConfig> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putAdditionalIpConfig.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>>

---

##### `putSecurityGroup` <a name="putSecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putSecurityGroup"></a>

```java
public void putSecurityGroup(OceanAksNetworkNetworkInterfaceSecurityGroup value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.putSecurityGroup.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

---

##### `resetAdditionalIpConfig` <a name="resetAdditionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAdditionalIpConfig"></a>

```java
public void resetAdditionalIpConfig()
```

##### `resetAssignPublicIp` <a name="resetAssignPublicIp" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetAssignPublicIp"></a>

```java
public void resetAssignPublicIp()
```

##### `resetIsPrimary` <a name="resetIsPrimary" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetIsPrimary"></a>

```java
public void resetIsPrimary()
```

##### `resetSecurityGroup` <a name="resetSecurityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSecurityGroup"></a>

```java
public void resetSecurityGroup()
```

##### `resetSubnetName` <a name="resetSubnetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.resetSubnetName"></a>

```java
public void resetSubnetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfig">additionalIpConfig</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList">OceanAksNetworkNetworkInterfaceAdditionalIpConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroup">securityGroup</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference">OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfigInput">additionalIpConfigInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput">assignPublicIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimaryInput">isPrimaryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroupInput">securityGroupInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetNameInput">subnetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIp">assignPublicIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimary">isPrimary</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetName">subnetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalIpConfig`<sup>Required</sup> <a name="additionalIpConfig" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfig"></a>

```java
public OceanAksNetworkNetworkInterfaceAdditionalIpConfigList getAdditionalIpConfig();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfigList">OceanAksNetworkNetworkInterfaceAdditionalIpConfigList</a>

---

##### `securityGroup`<sup>Required</sup> <a name="securityGroup" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroup"></a>

```java
public OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference getSecurityGroup();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference">OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference</a>

---

##### `additionalIpConfigInput`<sup>Optional</sup> <a name="additionalIpConfigInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.additionalIpConfigInput"></a>

```java
public java.lang.Object getAdditionalIpConfigInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceAdditionalIpConfig">OceanAksNetworkNetworkInterfaceAdditionalIpConfig</a>>

---

##### `assignPublicIpInput`<sup>Optional</sup> <a name="assignPublicIpInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIpInput"></a>

```java
public java.lang.Object getAssignPublicIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimaryInput`<sup>Optional</sup> <a name="isPrimaryInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimaryInput"></a>

```java
public java.lang.Object getIsPrimaryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `securityGroupInput`<sup>Optional</sup> <a name="securityGroupInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.securityGroupInput"></a>

```java
public OceanAksNetworkNetworkInterfaceSecurityGroup getSecurityGroupInput();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

---

##### `subnetNameInput`<sup>Optional</sup> <a name="subnetNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetNameInput"></a>

```java
public java.lang.String getSubnetNameInput();
```

- *Type:* java.lang.String

---

##### `assignPublicIp`<sup>Required</sup> <a name="assignPublicIp" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.assignPublicIp"></a>

```java
public java.lang.Object getAssignPublicIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isPrimary`<sup>Required</sup> <a name="isPrimary" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.isPrimary"></a>

```java
public java.lang.Object getIsPrimary();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subnetName`<sup>Required</sup> <a name="subnetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.subnetName"></a>

```java
public java.lang.String getSubnetName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>

---


### OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference <a name="OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference;

new OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroupOutputReference.property.internalValue"></a>

```java
public OceanAksNetworkNetworkInterfaceSecurityGroup getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceSecurityGroup">OceanAksNetworkNetworkInterfaceSecurityGroup</a>

---


### OceanAksNetworkOutputReference <a name="OceanAksNetworkOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksNetworkOutputReference;

new OceanAksNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.putNetworkInterface">putNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetNetworkInterface">resetNetworkInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetResourceGroupName">resetResourceGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetVirtualNetworkName">resetVirtualNetworkName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkInterface` <a name="putNetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.putNetworkInterface"></a>

```java
public void putNetworkInterface(IResolvable OR java.util.List<OceanAksNetworkNetworkInterface> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.putNetworkInterface.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>>

---

##### `resetNetworkInterface` <a name="resetNetworkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetNetworkInterface"></a>

```java
public void resetNetworkInterface()
```

##### `resetResourceGroupName` <a name="resetResourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetResourceGroupName"></a>

```java
public void resetResourceGroupName()
```

##### `resetVirtualNetworkName` <a name="resetVirtualNetworkName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.resetVirtualNetworkName"></a>

```java
public void resetVirtualNetworkName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterface">networkInterface</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList">OceanAksNetworkNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterfaceInput">networkInterfaceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkName">virtualNetworkName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `networkInterface`<sup>Required</sup> <a name="networkInterface" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterface"></a>

```java
public OceanAksNetworkNetworkInterfaceList getNetworkInterface();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterfaceList">OceanAksNetworkNetworkInterfaceList</a>

---

##### `networkInterfaceInput`<sup>Optional</sup> <a name="networkInterfaceInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.networkInterfaceInput"></a>

```java
public java.lang.Object getNetworkInterfaceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetworkNetworkInterface">OceanAksNetworkNetworkInterface</a>>

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkNameInput"></a>

```java
public java.lang.String getVirtualNetworkNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.virtualNetworkName"></a>

```java
public java.lang.String getVirtualNetworkName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksNetworkOutputReference.property.internalValue"></a>

```java
public OceanAksNetwork getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksNetwork">OceanAksNetwork</a>

---


### OceanAksOsDiskOutputReference <a name="OceanAksOsDiskOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksOsDiskOutputReference;

new OceanAksOsDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGb">sizeGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGbInput"></a>

```java
public java.lang.Number getSizeGbInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.sizeGb"></a>

```java
public java.lang.Number getSizeGb();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksOsDiskOutputReference.property.internalValue"></a>

```java
public OceanAksOsDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksOsDisk">OceanAksOsDisk</a>

---


### OceanAksStrategyList <a name="OceanAksStrategyList" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksStrategyList;

new OceanAksStrategyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.get"></a>

```java
public OceanAksStrategyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>>

---


### OceanAksStrategyOutputReference <a name="OceanAksStrategyOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksStrategyOutputReference;

new OceanAksStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetFallbackToOndemand">resetFallbackToOndemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetSpotPercentage">resetSpotPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFallbackToOndemand` <a name="resetFallbackToOndemand" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetFallbackToOndemand"></a>

```java
public void resetFallbackToOndemand()
```

##### `resetSpotPercentage` <a name="resetSpotPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.resetSpotPercentage"></a>

```java
public void resetSpotPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemandInput">fallbackToOndemandInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentageInput">spotPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemand">fallbackToOndemand</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentage">spotPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fallbackToOndemandInput`<sup>Optional</sup> <a name="fallbackToOndemandInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemandInput"></a>

```java
public java.lang.Object getFallbackToOndemandInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotPercentageInput`<sup>Optional</sup> <a name="spotPercentageInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentageInput"></a>

```java
public java.lang.Number getSpotPercentageInput();
```

- *Type:* java.lang.Number

---

##### `fallbackToOndemand`<sup>Required</sup> <a name="fallbackToOndemand" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.fallbackToOndemand"></a>

```java
public java.lang.Object getFallbackToOndemand();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `spotPercentage`<sup>Required</sup> <a name="spotPercentage" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.spotPercentage"></a>

```java
public java.lang.Number getSpotPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksStrategyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksStrategy">OceanAksStrategy</a>

---


### OceanAksTagList <a name="OceanAksTagList" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksTagList;

new OceanAksTagList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.get"></a>

```java
public OceanAksTagOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>>

---


### OceanAksTagOutputReference <a name="OceanAksTagOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksTagOutputReference;

new OceanAksTagOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksTagOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksTag">OceanAksTag</a>

---


### OceanAksVmSizesList <a name="OceanAksVmSizesList" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksVmSizesList;

new OceanAksVmSizesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.get"></a>

```java
public OceanAksVmSizesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>>

---


### OceanAksVmSizesOutputReference <a name="OceanAksVmSizesOutputReference" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.spotinst.ocean_aks.OceanAksVmSizesOutputReference;

new OceanAksVmSizesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resetWhitelist">resetWhitelist</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWhitelist` <a name="resetWhitelist" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.resetWhitelist"></a>

```java
public void resetWhitelist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelistInput">whitelistInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelist">whitelist</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `whitelistInput`<sup>Optional</sup> <a name="whitelistInput" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelistInput"></a>

```java
public java.util.List<java.lang.String> getWhitelistInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `whitelist`<sup>Required</sup> <a name="whitelist" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.whitelist"></a>

```java
public java.util.List<java.lang.String> getWhitelist();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanAks.OceanAksVmSizesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-spotinst.oceanAks.OceanAksVmSizes">OceanAksVmSizes</a>

---



